### deepFreeze

Deep freezes an object.

深层冻结一个对象。

Calls `Object.freeze(obj)` recursively on all unfrozen properties of passed object that are `instanceof` object.

递归的对传入的是对象（通过`instanceof`判断是否是对象）实例的所有没有冻结的属性调用`Object.freeze(obj)`。

```js
const deepFreeze = obj =>
  Object.keys(obj).forEach(
    prop =>
      !(obj[prop] instanceof Object) || Object.isFrozen(obj[prop]) ? null : deepFreeze(obj[prop])
  ) || Object.freeze(obj);
```

```js
'use strict';

const o = deepFreeze([1, [2, 3]]);

o[0] = 3; // not allowed
o[1][0] = 4; // not allowed as well
```
