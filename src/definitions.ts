export interface DateRangePickerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
