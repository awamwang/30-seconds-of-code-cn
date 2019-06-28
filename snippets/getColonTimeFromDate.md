### getColonTimeFromDate

Returns a string of the form `HH:MM:SS` from a `Date` object.

返回一个`Date`对象的`HH:MM:SS`形式字符串。

Use `Date.prototype.toTimeString()` and `String.prototype.slice()` to get the `HH:MM:SS` part of a given `Date` object.

使用`Date.prototype.toTimeString()`和`String.prototype.slice()`来获取给定`Date`的`HH:MM:SS`部分。

```js
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);
```

```js
getColonTimeFromDate(new Date()); // "08:38:00"
```
