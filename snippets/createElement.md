### createElement

Creates an element from a string (without appending it to the document). 
If the given string contains multiple elements, only the first one will be returned.

从字符串中创建一个元素（不把它追加到文档流中）。如果给定的字符串包含多个元素，只有一个会被返回。

Use `document.createElement()` to create a new element.
Set its `innerHTML` to the string supplied as the argument. 
Use `ParentNode.firstElementChild` to return the element version of the string.

使用`document.createElement()`来创建一个新元素。把它的`innerHTML`设置成参数提供的字符串。使用`ParentNode.firstElementChild`返回字符串的Html元素形式。

```js
const createElement = str => {
  const el = document.createElement('div');
  el.innerHTML = str;
  return el.firstElementChild;
};
```

```js
const el = createElement(
  `<div class="container">
    <p>Hello!</p>
  </div>`
);
console.log(el.className); // 'container'
```
