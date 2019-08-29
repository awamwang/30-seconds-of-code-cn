---
title: nest
tags: object,intermediate
---

Given a flat array of objects linked to one another, it will nest them recursively.
Useful for nesting comments, such as the ones on reddit.com.

给出一个相互链接的扁平的对象列表，它将会递归嵌套它们。用来建立嵌套的注释，例如reddit.com上面的。

Use recursion.
Use `Array.prototype.filter()` to filter the items where the `id` matches the `link`, then `Array.prototype.map()` to map each one to a new object that has a `children` property which recursively nests the items based on which ones are children of the current item.
Omit the second argument, `id`, to default to `null` which indicates the object is not linked to another one (i.e. it is a top level object).
Omit the third argument, `link`, to use `'parent_id'` as the default property which links the object to another one by its `id`.

使用递归。使用`Array.prototype.filter()`来过滤出`id`匹配`link`的项，然后使用`Array.prototype.map()`来把每个项映射到拥有一个`children`属性的对象，`children`属性递归嵌套的包含属于当前项目的子项目。如果不传第二个参数`id`，默认值为`null`，代表这个对象不链接到其他对象（例如它是顶层的对象）。如果不传第三个参数`link`，则使用`'parent_id'`作为它的默认值，通过`id`把这个对象链接到另一个。

```js
const nest = (items, id = null, link = 'parent_id') =>
  items
    .filter(item => item[link] === id)
    .map(item => ({ ...item, children: nest(items, item.id) }));
```

```js
// One top level comment
const comments = [
  { id: 1, parent_id: null },
  { id: 2, parent_id: 1 },
  { id: 3, parent_id: 1 },
  { id: 4, parent_id: 2 },
  { id: 5, parent_id: 4 }
];
const nestedComments = nest(comments); // [{ id: 1, parent_id: null, children: [...] }]
```