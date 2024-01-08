// primitive

// 7 types :- string, number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const outsideTemp = null
let useremail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// Referance (Non Primitive)

// Arrays, Objects, Functions

const heros = ["shaktiman", "Naagraj", "Doga"]
let myObj = {
    name: "Rohit",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive),  Heap (Non-primitive)

let myYouTubeName = "rohitpatilvlogs"
let anotherName = myYouTubeName
anotherName = "chaiaurcode"
console.log(myYouTubeName);
console.log(anotherName);

// heap

let userOne = {
    email : "user@google.com",
    upi : "user@sbl"
}

let userTwo = userOne

userTwo.email = "rohit@google.com"

console.log(userOne.email);       // both are give us referance direct
console.log(userTwo.email);   // we've done any changes all our changes are replicate to our original value