let score = "33abc"

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

//"33" => 33
//"33abc" => NaN (Not a Number)
// true => 1; false => 0;

let isLoggedIn = 1
let BooleanIsLoggedIn = Boolean(isLoggedIn)
console.log(BooleanIsLoggedIn)    //output - true

//1 => true; 0 => false;
//"" => false
//"Gaurav" => true

let someNumber = 33
let Stringnumber = String(someNumber)
console.log(Stringnumber)    //output 33
console.log(typeof Stringnumber)    //output string
