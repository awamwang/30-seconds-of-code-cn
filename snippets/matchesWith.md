### matchesWith

Compares two objects to determine if the first one contains equivalent property values to the second one, based on a provided function.

基于给出的函数，比较两个对象，确定第一个对象是否包含与第二个对象相同的属性值。

Use `Object.keys(source)` to get all the keys of the second object, then `Array.prototype.every()`, `Object.hasOwnProperty()` and the provided function to determine if all keys exist in the first object and have equivalent values.
If no function is provided, the values will be compared using the equality operator.

使用`Object.keys(source)`来获取第二个对象的键列表，然后用`Array.prototype.every()`, `Object.hasOwnProperty()`和给出的函数来确定第一个对象中是否有相同的键，并且对应的键有相同的值。如果没有`fn`函数参数，值将用等号操作符比较。

```js
const matchesWith = (obj, source, fn) =>
  Object.keys(source).every(
    key =>
      obj.hasOwnProperty(key) && fn
        ? fn(obj[key], source[key], key, obj, source)
        : obj[key] == source[key]
  );
```

```js
const isGreeting = val => /^h(?:i|ello)$/.test(val);
matchesWith(
  { greeting: 'hello' },
  { greeting: 'hi' },
  (oV, sV) => isGreeting(oV) && isGreeting(sV)
); // true
```
