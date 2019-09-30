const {ary} = require('./_30s.js');

test('ary is a Function', () => {
  expect(ary).toBeInstanceOf(Function);
});
const firstTwoMax = ary(Math.max, 2);
test('Discards arguments with index >=n', () => {
  expect([[2, 6, 'a'], [6, 4, 8], [10]].map(x => firstTwoMax(...x))).toEqual([6, 6, 10]);
});
