---
title: formatDuration
tags: date,math,string,intermediate
---

Returns the human readable format of the given number of milliseconds.

返回一个给定毫秒数值的可读格式。

- Divide `ms` with the appropriate values to obtain the appropriate values for `day`, `hour`, `minute`, `second` and `millisecond`.
- Use `Object.entries()` with `Array.prototype.filter()` to keep only non-zero values.
- Use `Array.prototype.map()` to create the string for each value, pluralizing appropriately.
- Use `String.prototype.join(', ')` to combine the values into a string.

把`ms`分为易于处理的`day`, `hour`, `minute`, `second`和`millisecond`几个值。使用`Object.entries()`和`Array.prototype.filter()`来只保留非零值。使用`Array.prototype.map()`来为每个值创建一个字符串，变为合适的复数形式。使用`String.prototype.join(', ')`把生成的值合并成一个字符串。

```js
const formatDuration = ms => {
  if (ms < 0) ms = -ms;
  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000
  };
  return Object.entries(time)
    .filter(val => val[1] !== 0)
    .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
    .join(', ');
};
```

```js
formatDuration(1001); // '1 second, 1 millisecond'
formatDuration(34325055574); // '397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds'
```
