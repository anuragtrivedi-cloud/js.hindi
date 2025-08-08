const score = 400
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(1)); 

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));

const hundred = 100000;
// console.log(hundred.toLocaleString('en-IN'));



//  +++++++++++++++++++ Maths ++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(3.2));
// console.log(Math.floor(3.2));
// console.log(Math.min(3,4,5,7,8));
// console.log(Math.max(3,4,5,6,7));

console.log(Math.random());  // give the value in 0 and 1
console.log((Math.random()*10 )+ 1); 
// Math.random() generates a random number between 0 (inclusive) and 1 (exclusive), like 0.7382.

// Multiplying by 10 gives you a number from 0 to <10.

// Adding 1 shifts the range to 1 to <11

console.log(Math.floor(Math.random()*10) +1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min)
