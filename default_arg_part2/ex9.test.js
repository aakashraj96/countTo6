const strMan = require('./ex9.js');

test('Using other parameters in default value expression', () => {
  expect(strMan('Hello', 3)).toBe('Hello!!!');
});

test('Not passing value for default argument', () => {
  expect(strMan('Hello')).toBe('Hello!!!!!');
});

test('Passing undefined for the default value', () => {
  expect(strMan('Hello', undefined)).toBe('Hello!!!!!');
});
