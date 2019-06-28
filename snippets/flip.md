### flip

Flip takes a function as an argument, then makes the first argument the last.

Flip接受一个函数作为参数，把传入函数的第一个参数放到参数列表末尾。

Return a closure that takes variadic inputs, and splices the last argument to make it the first argument before applying the rest.

返回一个接受可变数量参数，把第一个参数放到其余参数后面（即最后）的闭包（英文好像有错误）

```js
const flip = fn => (first, ...rest) => fn(...rest, first);
```

```js
let a = { name: 'John Smith' };
let b = {};
const mergeFrom = flip(Object.assign);
let mergePerson = mergeFrom.bind(null, a);
mergePerson(b); // == b
b = {};
Object.assign(b, a); // == b
```
