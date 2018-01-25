module.exports = function average(...arg) {
  let sum = 0;
  if (arg.length === 0) {
    return 0;
  }
  arg.forEach((value) => {
    sum += value;
  });
  return sum / arg.length;
};
