//Numbers

const number = 100 //general way of declaring an object
console.log(number)  // by default considers number variable as a number datatype o/p-> 100

const numberObject = new Number(200)  //use this only when you need an object type
console.log(numberObject) //o/p-> [Number: 200]

console.log(numberObject.toString().length) //here .length is a number, not a function. o/p->3
console.log(numberObject.toString().lastIndexOf(0)) //o/p-> 2
console.log(numberObject.toFixed(2)) //Number of digits after the decimal point. Must be in the range 0 - 20, inclusive. Returns a string representing a number in fixed-point notation.
//o/p-> 200.00

const otherNumber = 123.45
console.log(otherNumber.toPrecision(4)) //It rounds the number to 4 significant digits where rounding happens on last digit o/p->123.5
console.log(otherNumber.toPrecision(3)) //o/p->123


const hundreds = 1000000
console.log(hundreds.toLocaleString()) //Gives in US standard format i.e o/p-> 1,000,000
console.log(hundreds.toLocaleString('en-IN')) //Gives in Indian standard format i.e o/p-> 10,00,000 ('en-IN' is a string literal representing the locale for English (India).)

//Maths
console.log(Math); //in browser gives all functions for Maths object
console.log(Math.abs(-4)); //gives the absolute positive value for -4 i.e 4
console.log(Math.round(4.6)); //rounds up 4.6 and gives 5
console.log(Math.ceil(4.2)); //irrespective of the number after decimal adds up 1 in number 4.2 i.e gives 5
console.log(Math.floor(4.9)); //irrespective of the number after decimal gives the number before decimal as it is
console.log(Math.min(4, 3, 6, 8)); //gives min number from array
console.log(Math.max(4, 3, 6, 8)); //gives max number from array

console.log(Math.random()); //gives random value between 0 and 1
console.log((Math.random()*10) + 1); //gives random value starting from atleast 1 but in decimal (eg 4.575196859343142)
console.log(Math.floor(Math.random()*10) + 1); //gives random value starting from atleast 1 and not in decimal

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //another formula for same but for a min and max value