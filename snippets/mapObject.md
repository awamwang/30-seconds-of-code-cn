### mapObject

Maps the values of an array to an object using a function, where the key-value pairs consist of the original value as the key and the mapped value.

应用一个函数把数组中的值映射到一个以原始值作为key、函数结果作为value的key-value对象中。

Use an anonymous inner function scope to declare an undefined memory space, using closures to store a return value. Use a new `Array` to store the array with a map of the function over its data set and a comma operator to return a second step, without needing to move from one context to another (due to closures and order of operations).

使用一个匿名的内部函数作用域来声明一个未定义的内存空间，使用闭包来保存返回值。使用一个新的`Array`来存储函数作用数组后的结果，使用了逗号分隔符在不变更context（上下文）的情况下把第二步的操作结果返回（取决于闭包和操作符的顺序）。

```js
const mapObject = (arr, fn) =>
  (a => (
    (a = [arr, arr.map(fn)]), a[0].reduce((acc, val, ind) => ((acc[val] = a[1][ind]), acc), {})
  ))();
```

```js
const squareIt = arr => mapObject(arr, a => a * a);
squareIt([1, 2, 3]); // { 1: 1, 2: 4, 3: 9 }
```
