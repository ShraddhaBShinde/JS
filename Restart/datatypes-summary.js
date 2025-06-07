// https://262.ecma-international.org/5.1/#sec-11.4.3

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

//score->typeof(Number)
const score = 100

//score->typeof(Number)
const scoreValue = 100.3 //js is dynamic language

//--------------------------------------------------------------------------------------------------------
//isLoggedIn->typeof(Boolean)
const isLoggedIn = false

//outsideTemp->typeof(Object)
const outsideTemp = null //outsideTemp is empty

//userEmail->typeof(undefined)
let userEmail; //userEmail is undefined

//--------------------------------------------------------------------------------------------------------
//returns a unique symbol value each time it is called. Symbols are immutable and unique
const id = Symbol('123') //the return type of this is also of symbol datatype
const anotherId = Symbol('123') 

console.log(id);
console.log(anotherId);

console.log(id === anotherId); //false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

//object->typeof(object)
let myObj = {
    name: "hitesh",
    age: 22,
}

//function->typeof(function object)
const myFunction = function(){
    console.log("Hello world");
}

//console.log(typeof userEmail);
