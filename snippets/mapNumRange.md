### mapNumRange

Maps a number from one range to another range.

把一个数字从一个范围映射到另一个范围。

Returns `num` mapped between `outMin`-`outMax` from `inMin`-`inMax`.

返回从`inMin`-`inMax`范围映射到`outMin`-`outMax`范围的数字`num`。

```js
const mapNumRange = (num, inMin, inMax, outMin, outMax) =>
  ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
```

```js
mapNumRange(5, 0, 10, 0, 100); // 50
```
