# @ravij4057/capacitor-daterange-picker

A professional Capacitor plugin wrapper for the popular DateRangePicker.com library, providing a highly customizable date range selection UI for Web, Android, and iOS.

## Install

```bash
npm install @ravij4057/capacitor-daterange-picker
npx cap sync
```

## API

<docgen-index>

* [`open(...)`](#open)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### open(...)

```typescript
open(options?: { startDate?: string | undefined; endDate?: string | undefined; opens?: "left" | "right" | "center" | undefined; drops?: "down" | "up" | undefined; format?: string | undefined; } | undefined) => Promise<DateRangeResult>
```

| Param         | Type                                                                                                                                   |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ startDate?: string; endDate?: string; opens?: 'left' \| 'right' \| 'center'; drops?: 'down' \| 'up'; format?: string; }</code> |

**Returns:** <code>Promise&lt;<a href="#daterangeresult">DateRangeResult</a>&gt;</code>

--------------------


### Interfaces


#### DateRangeResult

| Prop            | Type                |
| --------------- | ------------------- |
| **`startDate`** | <code>string</code> |
| **`endDate`**   | <code>string</code> |
| **`label`**     | <code>string</code> |

</docgen-api>
