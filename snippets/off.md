### off

Removes an event listener from an element.

删除一个元素中的某个事件监听。

Use `EventTarget.removeEventListener()` to remove an event listener from an element. 
Omit the fourth argument `opts` to use `false` or specify it based on the options used when the event listener was added.

使用`EventTarget.removeEventListener()`来删除一个元素中的某个事件监听。如果不传第四个参数`opts`，则使用`false`或者使用事件监听被添加时候所使用的值。

```js
const off = (el, evt, fn, opts = false) => el.removeEventListener(evt, fn, opts);
```

```js
const fn = () => console.log('!');
document.body.addEventListener('click', fn);
off(document.body, 'click', fn); // no longer logs '!' upon clicking on the page
```
