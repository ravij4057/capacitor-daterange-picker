import { registerPlugin } from '@capacitor/core';

import type { DateRangePickerPlugin } from './definitions';

const DateRangePicker = registerPlugin<DateRangePickerPlugin>('DateRangePicker', {
  web: () => import('./web').then((m) => new m.DateRangePickerWeb()),
});

export * from './definitions';
export { DateRangePicker };
