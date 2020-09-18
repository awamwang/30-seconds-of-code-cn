---
title: show
tags: browser,css,beginner
---

Shows all the elements specified.

显示所有指定的元素。

- Use the spread operator (`...`) and `Array.prototype.forEach()` to clear the `display` property for each element specified.

使用展开操作符(`...`)和`Array.prototype.forEach()`来清除每个指定元素的`display`属性。

```js
const show = (...el) => [...el].forEach(e => (e.style.display = ''));
```

```js
show(...document.querySelectorAll('img')); // Shows all <img> elements on the page
```