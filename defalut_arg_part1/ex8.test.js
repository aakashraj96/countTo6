const midPoint = require('./ex8.js');

test('Testing default values - expected output 0.5', () => {
  expect(midPoint()).toBe(0.5);
});

test('Testing default values one undefined - expected output 1', () => {
  expect(midPoint(1, undefined)).toBe(1);
});

test('Testing default values both undefined - expected output 0.5', () => {
  expect(midPoint(undefined, undefined)).toBe(0.5);
});

test('Testing default values - passing 2 and 3 - expected output 2.5', () => {
  expect(midPoint(2, 3)).toBe(2.5);
});
