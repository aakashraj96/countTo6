module.exports = function strMan(str, len = str.length) {
	let st
	for (let i = 0; i < len; i += 1) {
    str += '!';
  }
  return str;
};
