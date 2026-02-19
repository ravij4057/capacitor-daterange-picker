import { registerPlugin } from '@capacitor/core';
const DateRangePicker = registerPlugin('DateRangePicker', {
    web: () => import('./web').then((m) => new m.DateRangePickerWeb()),
});
export * from './definitions';
export { DateRangePicker };
//# sourceMappingURL=index.js.map