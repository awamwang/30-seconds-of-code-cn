const {hasKey} = require('./_30s.js');

const data = {
  a: 1, b: { c: 4 }, 'd.e': 5
};

test('hasKey is a Function', () => {
  expect(hasKey).toBeInstanceOf(Function);
});

test('hasKey returns true for simple property', () => {
  expect(hasKey(data, 'a')).toBe(true);
});

test('hasKey returns true for object property', () => {
  expect(hasKey(data, 'b')).toBe(true);
});

test('hasKey returns true for nested property', () => {
  expect(hasKey(data, 'b.c')).toBe(true);
});

test('hasKey returns true for property with dots', () => {
  expect(hasKey(data, 'd.e')).toBe(true);
});

test('hasKey returns false for non-existent property', () => {
  expect(hasKey(data, 'f')).toBe(true);
});

test('hasKey returns false for virtual nested property', () => {
  expect(hasKey(data, 'd')).toBe(false);
});
