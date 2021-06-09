/*----------------------------------------------*/
//Phase 1
var calculator = require("./calculator.js");

console.log(calculator.add(3, 7));
console.log(calculator.multiply(3, 7));

// /*----------------------------------------------*/
// //Phase 2

var index = require("./index.js");
console.log(index.sum(2, 7));
console.log(index.multiplication(2, 7));
console.log(index.subtraction(2, 7));
console.log(index.division(2, 7));

/*----------------------------------------------*/

//Phase 3
//npm install moment --save
const moment = require("moment");
const calculator = require("./calculator.js");

console.log("Today is:", moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
console.log(calculator.add(3, 7));
console.log(calculator.multiply(3, 7));
