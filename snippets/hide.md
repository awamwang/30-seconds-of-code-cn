### hide

Hides all the elements specified.

隐藏所有指定的元素。

Use `NodeList.prototype.forEach()` to apply `display: none` to each element specified.

使用`NodeList.prototype.forEach()`来对每个给定的元素应用`display: none`样式。

```js
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));
```

```js
hide(document.querySelectorAll('img')); // Hides all <img> elements on the page
```
