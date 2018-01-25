// function print(){
// console.log(`Hello, ${process.argv[2]}!
//   Your name lowercased is "${process.argv[2].toLowerCase()}".`);
// }

function print() {
  const result = `Hello, ${arguments[0]}!
Your name lowercased is "${arguments[0].toLowerCase()}".`;
  console.log(result);
  return result;
}

module.exports = print;
