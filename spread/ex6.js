// let arr = process.argv.slice(2);
// console.log(`The minimum of [${arr}] is ${Math.min(...arr)}`);

function spread(...arr) {
  if (arr.length === 0) {
    return null;
  }
  if (arr.some(value => value === Infinity)) {
    return Infinity;
  }
  console.log(`The minimum of [${arr}] is ${Math.min(...arr)}`);
  return Math.min(...arr);
}

module.exports = spread;
