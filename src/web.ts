import { WebPlugin } from '@capacitor/core';

import type { DateRangePickerPlugin,DateRangeResult } from './definitions';

import * as jQuery_ from 'jquery';
const $: any = (jQuery_ as any).default || jQuery_;

import * as moment_ from 'moment';
const moment: any = (moment_ as any).default || moment_;
import 'daterangepicker';

export class DateRangePickerWeb extends WebPlugin implements DateRangePickerPlugin {

  constructor() {
    super();
    this.loadRemoteStyles();
  }


  private loadRemoteStyles() {
    if (!document.getElementById('daterangepicker-style')) {
      const link = document.createElement('link');
      link.id = 'daterangepicker-style';
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = 'https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css';
      document.head.appendChild(link);
    }
  }

  async open(options: any = {}): Promise<DateRangeResult> {
    return new Promise((resolve, reject) => {
      // Create hidden input
      const $input = $('<input type="text" style="display:none" />').appendTo('body');

      $input.on('show.daterangepicker', () => {
        $('body').addClass('daterangepicker-open'); // Backdrop trigger karne ke liye
      });
      
      $input.on('hide.daterangepicker', () => {
        $('body').removeClass('daterangepicker-open');
      });

      // Initialize daterangepicker
      ($input as any).daterangepicker({
        startDate: options.startDate || moment(),
        endDate: options.endDate || moment(),
        opens: options.opens || 'center',
        drops: options.drops || 'down',
        alwaysShowCalendars: true,
        autoApply: true, 
        ranges: {
           'Today': [moment(), moment()],
           'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
           'Last 7 Days': [moment().subtract(6, 'days'), moment()],
           'Last 30 Days': [moment().subtract(29, 'days'), moment()],
           'This Month': [moment().startOf('month'), moment().endOf('month')],
           'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
      }, (start: any, end: any, label: any) => {
        const result: DateRangeResult = {
          startDate: start.format(options.format || 'YYYY-MM-DD'),
          endDate: end.format(options.format || 'YYYY-MM-DD'),
          label: label
        };
        resolve(result);
        $input.remove(); 
      });

      // Show the picker
      const drp = ($input as any).data('daterangepicker');
      if (drp) {
        drp.show();
      } else {
        reject("Could not initialize daterangepicker instance");
      }

      // Handle cancel
      $input.on('cancel.daterangepicker', () => {
        $input.remove();
        reject('User cancelled selection');
      });
    });
  }
}
