import { WebPlugin } from '@capacitor/core';
import * as jQuery_ from 'jquery';
const $ = jQuery_.default || jQuery_;
import * as moment_ from 'moment';
const moment = moment_.default || moment_;
import 'daterangepicker';
export class DateRangePickerWeb extends WebPlugin {
    constructor() {
        super();
        this.loadRemoteStyles();
    }
    loadRemoteStyles() {
        if (!document.getElementById('daterangepicker-style')) {
            const link = document.createElement('link');
            link.id = 'daterangepicker-style';
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css';
            document.head.appendChild(link);
        }
    }
    async open(options = {}) {
        return new Promise((resolve, reject) => {
            // Create hidden input
            const $input = $('<input type="text" style="display:none" />').appendTo('body');
            // Initialize daterangepicker
            $input.daterangepicker({
                startDate: options.startDate || moment(),
                endDate: options.endDate || moment(),
                opens: options.opens || 'center',
                drops: options.drops || 'down',
                ranges: {
                    'Today': [moment(), moment()],
                    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                }
            }, (start, end, label) => {
                const result = {
                    startDate: start.format(options.format || 'YYYY-MM-DD'),
                    endDate: end.format(options.format || 'YYYY-MM-DD'),
                    label: label
                };
                resolve(result);
                $input.remove();
            });
            // Show the picker
            const drp = $input.data('daterangepicker');
            if (drp) {
                drp.show();
            }
            else {
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
//# sourceMappingURL=web.js.map