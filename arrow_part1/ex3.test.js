let mapReduce = require('./ex3.js');

test('Testing function call', () => {
	expect(mapReduce("Hello", "arrow", "functions")).toBe("Haf");
});
