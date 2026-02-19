export interface DateRangeResult {
    startDate: string;
    endDate: string;
    label?: string;
}
export interface DateRangePickerPlugin {
    /**
     * Open the DateRange Picker UI
     */
    open(options?: {
        startDate?: string;
        endDate?: string;
        opens?: 'left' | 'right' | 'center';
        drops?: 'down' | 'up';
        format?: string;
    }): Promise<DateRangeResult>;
}
