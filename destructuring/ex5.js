// let userArray = process.argv.slice(2);
// let obj = {};
// [,obj.username,obj.email] = userArray;
// console.log(obj);


function acceptArray() {
  const userArray = Object.values(arguments);
  const obj = {};
  [, obj.username, obj.email] = userArray;
  console.log(obj);
  return obj;
}

module.exports = acceptArray;
