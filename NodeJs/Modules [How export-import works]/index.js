//there is 2 ways for imorting modules in Node.js

//-----1-----
const value = require('./math')

console.log(value.myAddFnction(2,3)); 


//-----2-----
const {add, sub, mul, div} = require('./math');

console.log(add(2, 3)); // 5
console.log(sub(5, 2)); // 3
console.log(mul(2, 3)); // 6
console.log(div(6, 2)); // 3

// To use the default export
const value = require('./math');
value();


