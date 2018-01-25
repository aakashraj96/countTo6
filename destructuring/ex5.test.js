const acceptArray = require('./ex5.js');

test('Testing function call', () => {
  expect(acceptArray('userId', 'aakash', 'aakash.raj5@gmail.com', 21, 'Aakash', 'raj')).toEqual({ username: 'aakash', email: 'aakash.raj5@gmail.com' });
});
