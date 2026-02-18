import { WebPlugin } from '@capacitor/core';

import type { DateRangePickerPlugin } from './definitions';

export class DateRangePickerWeb extends WebPlugin implements DateRangePickerPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
