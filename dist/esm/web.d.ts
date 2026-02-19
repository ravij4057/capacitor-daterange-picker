import { WebPlugin } from '@capacitor/core';
import type { DateRangePickerPlugin, DateRangeResult } from './definitions';
import 'daterangepicker';
export declare class DateRangePickerWeb extends WebPlugin implements DateRangePickerPlugin {
    constructor();
    private loadRemoteStyles;
    open(options?: any): Promise<DateRangeResult>;
}
