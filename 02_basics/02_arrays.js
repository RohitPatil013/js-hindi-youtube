const marvel_heros = [ "thor", "ironman", "hulk" ]
const dc_heros = [ "superman", "flash", "batman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros);      
//console.log(marvel_heros[3][0]);       

//const allHeros = marvel_heros.concat(dc_heros)   // its written new array with combining exsting 2diff arrays
//console.log(allHeros);

const allNewHeros = [...marvel_heros, ...dc_heros]  // its SPREAD operator which primary use to combine arrays
//console.log(allNewHeros);

const anotherArray = [ 1, 2, 3, [ 4, 5, 6 ], 7, [ 6, 7, [ 4, 5 ]]]
const realAnoherArray = anotherArray.flat(Infinity)  // FLAT use to combine complex arrays element into one specific Array
console.log(realAnoherArray)


console.log(Array.isArray("Rohit"));
console.log(Array.from("Rohit"));
console.log(Array.from({name: "Rohit"}));   // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));