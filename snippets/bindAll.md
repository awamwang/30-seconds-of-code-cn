---
title: bindAll
tags: object,function,intermediate
---

Binds methods of an object to the object itself, overwriting the existing method.

把对象的方法绑定到对象本身上（方法的执行上下文都设置为对象本身），覆盖已经存在的方法。（为了解决一些指定的上下文不合适的情况，例如Dom中事件的监听回调中）

Use `Array.prototype.forEach()` to return a `function` that uses `Function.prototype.apply()` to apply the given context (`obj`) to `fn` for each function specified.

使用`Array.prototype.forEach()`返回一个函数，它使用`Function.prototype.apply()`来把指定的上下文(`obj`)应用到每个给出的`fn`函数上。

```js
const bindAll = (obj, ...fns) =>
  fns.forEach(
    fn => (
      (f = obj[fn]),
      (obj[fn] = function() {
        return f.apply(obj);
      })
    )
  );
```

```js
var view = {
  label: 'docs',
  click: function() {
    console.log('clicked ' + this.label);
  }
};
bindAll(view, 'click');
jQuery(element).on('click', view.click); // Logs 'clicked docs' when clicked.
```