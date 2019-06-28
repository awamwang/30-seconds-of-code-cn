### dayOfYear

Gets the day of the year from a `Date` object.

从一个`Date`对象中获取它是一年中的第多少天。

Use `new Date()` and `Date.prototype.getFullYear()` to get the first day of the year as a `Date` object, subtract it from the provided `date` and divide with the milliseconds in each day to get the result.
Use `Math.floor()` to appropriately round the resulting day count to an integer.

使用`new Date()`和`Date.prototype.getFullYear()`获取这一年的第一天来作为一个`Date`对象，用给定的`date`减掉它并除以每天中的毫秒数来获得结果。使用`Math.floor()`把计算结果天数适当的取整。

```js
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
// 直接给参数一个默认值，计算当天
const dayOfYear = (date = new Date()) =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
```

```js
dayOfYear(new Date()); // 272
```
