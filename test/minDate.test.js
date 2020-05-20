const {minDate} = require('./_30s.js');

test('minDate is a Function', () => {
  expect(minDate).toBeInstanceOf(Function);
});
test('minDate produces the minimum date', () => {
  const array = [
    new Date(2017, 4, 13),
    new Date(2018, 2, 12),
    new Date(2016, 0, 10),
    new Date(2016, 0, 9)
  ];
  expect(minDate(array)).toEqual(new Date(2016, 0, 9));
});
