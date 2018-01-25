const spread = require('./ex6.js');

test('Testing spread- Passing 2,3,6,1 - expected output 1', () => {
  expect(spread(2, 3, 6, 1)).toBe(1);
});

test('Testing spread- Passing no arguments - expected output null', () => {
  expect(spread()).toBe(null);
});

test('Testing spread- Passing infinity expected output infinity', () => {
  expect(spread(Infinity, 2)).toBe(Infinity);
});
