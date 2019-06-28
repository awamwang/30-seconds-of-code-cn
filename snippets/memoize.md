### memoize

Returns the memoized (cached) function.

返回存（缓存）的函数。

Create an empty cache by instantiating a new `Map` object.
Return a function which takes a single argument to be supplied to the memoized function by first checking if the function's output for that specific input value is already cached, or store and return it if not. The `function` keyword must be used in order to allow the memoized function to have its `this` context changed if necessary.
Allow access to the `cache` by setting it as a property on the returned function.

初始化一个新的`Map`对象作为空缓存。返回一个接收一个参数的函数，用这个参数作为存函数检查这个函数收到指定的输入所得到的输出是否已经被缓存的主要依据。`function`关键字必须按顺序使用，以允许保存函数在必要时改变它的`this`上下文。把`cache`作为返回的函数的一个属性，从而让它可以被访问。

```js
const memoize = fn => {
  const cache = new Map();
  const cached = function(val) {
    return cache.has(val) ? cache.get(val) : cache.set(val, fn.call(this, val)) && cache.get(val);
  };
  cached.cache = cache;
  return cached;
};
```

```js
// See the `anagrams` snippet.
const anagramsCached = memoize(anagrams);
anagramsCached('javascript'); // takes a long time
anagramsCached('javascript'); // returns virtually instantly since it's now cached
console.log(anagramsCached.cache); // The cached anagrams map
```
