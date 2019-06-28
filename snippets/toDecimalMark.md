### toDecimalMark

Use `toLocaleString()` to convert a float-point arithmetic to the [Decimal mark](https://en.wikipedia.org/wiki/Decimal_mark) form. It makes a comma separated string from a number.

使用`toLocaleString()`来把一个浮点数转换为[Decimal mark](https://en.wikipedia.org/wiki/Decimal_mark)格式。它从数字创建一个用逗号分隔的字符串。

 ```js
const toDecimalMark = num => num.toLocaleString('en-US');
```

```js
toDecimalMark(12305030388.9087); // "12,305,030,388.909"
```
