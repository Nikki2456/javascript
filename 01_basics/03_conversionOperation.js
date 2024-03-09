let score = 33
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof (score));

/*
"33" => 33
"33abc" => NaN
True => 1; false => 0
*/
let isLoggedIn = "nikhil"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);



//*************************************operation***************************** */

let value  = 3
let negValue  = -value
//console.log(negValue);
/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
*/
let str1 = "hello"
let str2 = "nikhil"
let str3 = str1 + str2
console.log(str3);
/*
console.log("1"+ 2);
console.log(1+"2");
console.log("1"+ 2+2);
console.log(1+2 +"1");
//toprimitive tc 39
*/

console.log(+true);
console.log(+"");