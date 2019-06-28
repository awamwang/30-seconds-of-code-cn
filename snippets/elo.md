### elo

Computes the new ratings between two or more opponents using the [Elo rating system](https://en.wikipedia.org/wiki/Elo_rating_system). It takes an array
of pre-ratings and returns an array containing post-ratings.
The array should be ordered from best performer to worst performer (winner -> loser).

使用[Elo rating system](https://en.wikipedia.org/wiki/Elo_rating_system)计算两个或更多竞争者的新评分。接收一个之前评分的数组，并返回一个包含之后评分的数组。数组应该以最优到最差的顺序排序（胜者->败者）。

Use the exponent `**` operator and math operators to compute the expected score (chance of winning).
of each opponent and compute the new rating for each.
Loop through the ratings, using each permutation to compute the post-Elo rating for each player in a pairwise fashion. 
Omit the second argument to use the default `kFactor` of 32.

使用指数操作符`**`和数学操作符来计算期望的分值（获胜概率）。每个竞争者都计算新的评分。遍历排序列表，使用每种排列来计算成对方式的每个选手的后Elo评分。如果不传第二个参数`kFactor`，默认值为32。

```js
const elo = ([...ratings], kFactor = 32, selfRating) => {
  const [a, b] = ratings;
  const expectedScore = (self, opponent) => 1 / (1 + 10 ** ((opponent - self) / 400));
  const newRating = (rating, i) =>
    (selfRating || rating) + kFactor * (i - expectedScore(i ? a : b, i ? b : a));
  if (ratings.length === 2) return [newRating(a, 1), newRating(b, 0)];

  for (let i = 0, len = ratings.length; i < len; i++) {
    let j = i;
    while (j < len - 1) {
      j++;
      [ratings[i], ratings[j]] = elo([ratings[i], ratings[j]], kFactor);
    }
  }
  return ratings;
};
```

```js
// Standard 1v1s
elo([1200, 1200]); // [1216, 1184]
elo([1200, 1200], 64); // [1232, 1168]
// 4 player FFA, all same rank
elo([1200, 1200, 1200, 1200]).map(Math.round); // [1246, 1215, 1185, 1154]
/*
For teams, each rating can adjusted based on own team's average rating vs.
average rating of opposing team, with the score being added to their
own individual rating by supplying it as the third argument.
*/
```
