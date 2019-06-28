### decapitalize

Decapitalizes the first letter of a string.

去大写化一个字符串的首字母。

Use array destructuring and `String.toLowerCase()` to decapitalize first letter, `...rest` to get array of characters after first letter and then `Array.prototype.join('')` to make it a string again.
Omit the `upperRest` parameter to keep the rest of the string intact, or set it to `true` to convert to uppercase.

使用数组解构和`String.toLowerCase()`来去大写化首字母，使用`...rest`来获取首字母后的字符数组，然后用`Array.prototype.join('')`把它们重新变为字符串。如果不传`upperRest`参数则保持字符串剩余部分不变；把它设置成`true`，代表将剩余部分转换为大写。

```js
const decapitalize = ([first, ...rest], upperRest = false) =>
  first.toLowerCase() + (upperRest ? rest.join('').toUpperCase() : rest.join(''));
```

```js
decapitalize('FooBar'); // 'fooBar'
decapitalize('FooBar', true); // 'fOOBAR'
```
