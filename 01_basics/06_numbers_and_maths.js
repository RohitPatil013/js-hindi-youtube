const score = 5000
//console.log(score);

const balance = new Number(120);
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));

const otherNumber = 140.8655
//console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));

//****************** Maths **********************

//console.log(Math);
//console.log(Math.abs(-4));  // (absolute) convert negative values into positive values
//console.log(Math.round(4.64));  // (round) > 4.5 = 4   and.    4.5< = 5   
//console.log(Math.ceil(4.2));   // (ceil) large (possibility) value assign in case of ceil e.g : 5
//console.log(Math.floor(4.9));  // (floor) small or same (possibility) value assign to floor e.g : 4
//console.log(Math.min(4, 56, 8, 20)); // (min) minimum value in array
//console.log(Math.max(6, 24, 10, 3)); // (max) maximum value in array

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min);