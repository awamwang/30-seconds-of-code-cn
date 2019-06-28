### stringPermutations

⚠️ **WARNING**: This function's execution time increases exponentially with each character. Anything more than 8 to 10 characters will cause your browser to hang as it tries to solve all the different combinations.

⚠️ **WARNING**: 这个函数的执行时间随每个字符指数级增长。每个超过8到10个字符的字符串将因为尝试所有不同的组合而导致你的浏览器挂起（无响应）。

Generates all permutations of a string (contains duplicates).

生成一个字符串的所有排列（包括重复的）。

Use recursion.
For each letter in the given string, create all the partial permutations for the rest of its letters.
Use `Array.prototype.map()` to combine the letter with each partial permutation, then `Array.prototype.reduce()` to combine all permutations in one array.
Base cases are for string `length` equal to `2` or `1`.

使用递归。对给定字符串中的每个字母，创建剩余字母的所有的部分全排列。使用`Array.prototype.map()`来把这个字母和每个部分全排列组装起来，然后使用`Array.prototype.reduce()`把所有排列组装到一个数组中。基本的场景是字符串`length`等于`2`或`1`。

```js
const stringPermutations = str => {
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
  return str
    .split('')
    .reduce(
      (acc, letter, i) =>
        acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),
      []
    );
};
```

```js
stringPermutations('abc'); // ['abc','acb','bac','bca','cab','cba']
```
