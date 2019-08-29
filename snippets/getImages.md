---
title: getImages
tags: browser,beginner
---

Fetches all images from within an element and puts them into an array

把一个元素内部所有的image都找到，并把它们放到一个数组中。

Use `Element.prototype.getElementsByTagName()` to fetch all `<img>` elements inside the provided element, `Array.prototype.map()` to map every `src` attribute of their respective `<img>` element, then create a `Set` to eliminate duplicates and return the array.

使用`Element.prototype.getElementsByTagName()`来获取给定元素内部的所有的`<img>`元素，用`Array.prototype.map()`来分别获取`<img>`元素对应的每一个`src`属性，然后创建一个`Set`来去除重复数据并返回一个数组。

```js
const getImages = (el, includeDuplicates = false) => {
  const images = [...el.getElementsByTagName('img')].map(img => img.getAttribute('src'));
  return includeDuplicates ? images : [...new Set(images)];
};
```

```js
getImages(document, true); // ['image1.jpg', 'image2.png', 'image1.png', '...']
getImages(document, false); // ['image1.jpg', 'image2.png', '...']
```