// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

//for number
let score = 33
console.log(typeof score)// o/p-> number
console.log(typeof (score));// o/p-> number

let score1 = "33"
console.log(typeof score1) //o/p-> string
let valueInScore1 = Number(score1)
console.log(valueInScore1);//o/p-> 33


//for number with string
let score2 = "33abc"
console.log(typeof score2) //o/p-> string

//convert score2 to number
let valueInScore2 = Number(score2) //converts value in score2 to number
console.log(valueInScore2);// o/p-> NaN (NaN (Not-a-Number) in JavaScript is a special numeric value representing an undefined or unrepresentable value, often arising from invalid or uncomputable mathematical operations. Despite its name, NaN is of the number type.)
//similarly for null->o/p->typeof is number and value is 0


//for null
let score3 = null
console.log(typeof score3) //o/p-> object
let valueInScore3 = Number(score3)
console.log(valueInScore3);//o/p-> 0


//for undefined
let score4 = undefined
console.log(typeof score4) //o/p-> undefined
let valueInScore4 = Number(score4)
console.log(valueInScore4);//o/p-> NaN


//for boolean
let score5 = true
console.log(typeof score5) //o/p-> boolean
let valueInScore5 = Number(score5)
console.log(valueInScore5);//o/p-> 1


//for string
let score6 = "shraddha"
console.log(typeof score6) //o/p-> string
let valueInScore6 = Number(score6)
console.log(valueInScore6);//o/p-> NaN

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0


//for string
let isLoggedIn = "shraddhab"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);//op-> true

// 1 => true; 0 => false
// "" => false
// "hitesh" => true


//conversion of number to string
let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);// o/p-> 33
console.log(typeof stringNumber)//o/p-> string

// *********************** Operations ***********************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);//power
console.log(2/3);//quotient
console.log(2%3);//remainder

let str1 = "hello"
let str2 = " Shraddha"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);//12
console.log(1 + "2");//12
console.log("1" + 2 + 2);//122->considers string
console.log(1 + 2 + "2");//32->considers numbers as initial value is number

console.log( (3 + 4) * 5 % 3);// use parenthesis when defining such expression but avoid using such way

console.log(+true);
console.log(+"");//never use such way



let num1, num2, num3
num1 = num2 = num3 = 2 + 2
let gameCounter = 100
++gameCounter;
console.log(gameCounter);


// *********************** Comparisons ***********************
//simple comparions
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


//tricky comparisons
// console.log("2" > 1); //gives o/p as true, js allows this and converts the data type to number, but writing such code is not reccomended
// console.log("02" > 1);

//(not prefferable) ;equality check (==) and comparison operators (>,<, >=,<=) work differently ; Comparisons convert null to a number treating it as 0
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);
