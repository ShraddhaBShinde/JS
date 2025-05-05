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