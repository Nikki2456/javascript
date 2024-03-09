const accountId =144553 //const is keyword
let accountEmail = "Maarnanikhil@gmail.com"
var accountPassword = "12345"
accountCity = "Hyderabad"
let accountState;

//01_basics/01_variables.js
//accountId = 21
//{} are scope
/*
prefer not use var 
because of issue in block scope and functional scope
*/
accountEmail = "nikki@gmail.com"
accountPassword = "212121"
accountCity = "telangana"
console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountState])