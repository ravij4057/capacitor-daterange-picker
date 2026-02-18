export interface DateRangeResult {
  startDate: string;
  endDate: string;
  label?: string;
}


export interface DateRangePickerPlugin {
  // echo(options: { value: string }): Promise<{ value: string }>;

  open(options?: {
    startDate?: string;
    endDate?: string;
    opens?: 'left' | 'right' | 'center';
    drops?: 'down' | 'up';
    format?: string;
  }): Promise<DateRangeResult>;
}
