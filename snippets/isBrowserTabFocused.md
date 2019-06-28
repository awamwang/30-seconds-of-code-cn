### isBrowserTabFocused

Returns `true` if the browser tab of the page is focused, `false` otherwise.

如果当前的浏览器标签页是获取到焦点的就返回`true`，否则返回`false`。

Use the `Document.hidden` property, introduced by the Page Visibility API to check if the browser tab of the page is visible or hidden.

使用页面可见性API（Page Visibility API）中的`Document.hidden`属性来检查当前的浏览器标签页是可见的还是隐藏的。

```js
const isBrowserTabFocused = () => !document.hidden;
```

```js
isBrowserTabFocused(); // true
```
