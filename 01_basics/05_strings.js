const name = "Rohit"
const repoCount = 50

// console.log(name + repoCount + " value ");           // its old outdated way for declaration of strings

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // its modern and redable way to declaration of strings

const gameName = new String("Rohit-Patil-com");

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.endsWith());
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4).     // substring start and end 
console.log(newString);

const anotherString = gameName.slice(-8, 4)     // slice its start with negative values
console.log(anotherString);

const newStringOne =  "   Rohit   "
console.log(newStringOne);
console.log(newStringOne.trim());  // (Trim) remove unwanted spaces 

const url = "https://rohit.com/rohit%20patil"
console.log(url.replace('%20', '-'))     // Replace

console.log(url.includes('rohit'));      // Includes

console.log(gameName.split('-'));        // Split

