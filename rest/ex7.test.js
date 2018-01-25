const average = require('./ex7.js');

test('Testing rest- Passing 5,5 expected output 5', () => {
  expect(average(5, 5)).toBe(5);
});

test('Testing rest- Passing undefined expected output NaN', () => {
  expect(average(5, undefined, 5)).toBe(NaN);
});


test('Testing rest- No arguments', () => {
  expect(average()).toBe(0);
});
