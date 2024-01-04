const accountId = 1303200
let accountEmail = "rohit@google.com"
var accountPassword = "12345"
accountCity = "Nashik"
let acc

// constId = 2  // Not Allowed
accountEmail = "ceo@gmail.com"
accountPassword = "212121"
accountCity = "Pune"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);
/*  
 prefer not to use var 
 because of issue in block scope and functional scope
*/
if (condition) {
    
}