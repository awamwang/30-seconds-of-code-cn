### pluralize

Returns the singular or plural form of the word based on the input number. If the first argument is an `object`, it will use a closure by returning a function that can auto-pluralize words that don't simply end in `s` if the supplied dictionary contains the word.

根据输入的数字返回单词的单数或者复数形式。如果第一个参数是`object`，他将返回一个可以自动的把单词列表复数化的函数闭包，这个函数根据给出的字典（`object`）来判断并非简单的以`s`结尾的单词，并转化它。

If `num` is either `-1` or `1`, return the singular form of the word. If `num` is any other number, return the plural form. Omit the third argument to use the default of the singular word + `s`, or supply a custom pluralized word when necessary. If the first argument is an `object`, utilize a closure by returning a function which can use the supplied dictionary to resolve the correct plural form of the word.

如果`num`是`1`或`-1`，返回单词的单数形式。如果`num`是其他任何数，返回复数形式。如果不传第三个参数，则使用单数单词+`s`，或者当必要时提供一个自定义的复数形式。如果第一个参数是`object`，返回一个使用提供的字典来解析单词的正确复数形式的函数闭包。

```js
const pluralize = (val, word, plural = word + 's') => {
  const _pluralize = (num, word, plural = word + 's') =>
    [1, -1].includes(Number(num)) ? word : plural;
  if (typeof val === 'object') return (num, word) => _pluralize(num, word, val[word]);
  return _pluralize(val, word, plural);
};
```

```js
pluralize(0, 'apple'); // 'apples'
pluralize(1, 'apple'); // 'apple'
pluralize(2, 'apple'); // 'apples'
pluralize(2, 'person', 'people'); // 'people'

const PLURALS = {
  person: 'people',
  radius: 'radii'
};
const autoPluralize = pluralize(PLURALS);
autoPluralize(2, 'person'); // 'people'
```
