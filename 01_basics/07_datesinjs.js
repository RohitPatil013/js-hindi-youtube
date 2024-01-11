//Dates

let myDate = new Date()               //********OUTPUT**********
//console.log(myDate.toString());     // Thu Jan 11 2024 07:59:58 GMT+0000 (Coordinated Universal Time)
//console.log(myDate.toDateString()); // Thu Jan 11 2024
//console.log(myDate.toISOString());  // 2024-01-11T08:00:27.913Z
//console.log(myDate.toJSON());       // 2024-01-11T08:00:27.913Z
//console.log(myDate.toLocaleDateString());  // 1/11/2024
//console.log(myDate.toLocaleString());  // 1/11/2024, 8:00:27 AM

//console.log(typeof myDate);        // object

//let myCreatedDate = new Date(2023, 0, 23, 5, 3)
//console.log(myCreatedDate.toDateString());

//let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() 
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

const newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//`${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long",
})