// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "Abhinav"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[3]);

// Array Methods

//myArr.push(6)
//myArr.push(7)
//myArr.pop()

//myArr.unshift(8)      //unshift add given attribute element added in Array eg. 8
//myArr.shift()
//myArr.shift()

//console.log(myArr.includes(9));     // 9 is include as a element in array or not its output in boolean
//console.log(myArr.indexOf(11))      // at the index no of 11th what element is present

//const newArr = myArr.join()         //join use to convert array to the type of string

//console.log(myArr)              //    [ 0, 1, 2, 3, 4, 5 ]  
//console.log(newArr);            //     0,1,2,3,4,5
//console.log(typeof newArr);     //    string

console.log("A", myArr);          // A [ 0, 1, 2, 3, 4, 5 ]
const myn1 = myArr.slice(1, 3)    

console.log(myn1);                // [ 1, 2 ]
console.log("B", myArr);          // B [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3)
console.log("c", myArr);          // c [ 0, 4, 5 ]
console.log(myn2);                // [ 1, 2, 3 ]