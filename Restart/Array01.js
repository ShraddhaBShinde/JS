// array

const names = ["shraddha", "anjali"] 

const myArr2 = new Array('a','b','c','d')
console.log(myArr2[2]); //o/p-> c

// Array methods

const myArr = [0, 1, 2, 3, 4, 5] 
myArr.push(6) //adds element to the end of array
myArr.push(7)
myArr.pop() //removes element in last position

myArr.unshift(9) //adds element to the start of array
myArr.shift() //removes element from the start of array

console.log(myArr.includes(9)); //returns boolean value true or false if array consists of the given element i.e 9
console.log(myArr.indexOf(3));

const newArr = myArr.join() //returns array in string format 

console.log(myArr);
console.log( newArr);
//------------------------------------------------------------------------------


// slice, splice

console.log("not editted ", myArr);

const myn1 = myArr.slice(1, 3) //it includes first and second element and ignores the last o/p-> [1,2]
console.log(myn1);
console.log("after slicing ", myArr); //we get the original array i.e [0, 1, 2, 3, 4, 5] 


const myn2 = myArr.splice(1, 3) 
console.log(myn2); // it includes first and second and also the third element [ 1, 2, 3 ]
console.log("after splicing ", myArr); // but after splicing, the elements are removed from the original array o/p->[ 0, 4, 5 ]

//combining 2 arrays
const girl_names = ["Emma", "Olivia", "Matina "]
const boy_names = ["Oliver", "Leo", "James"]

//using push
girl_names.push(boy_names)
console.log(girl_names); //o/p->[ 'Emma', 'Olivia', 'Matina ', [ 'Oliver', 'Leo', 'James' ] ]

console.log(girl_names[3][1]); //o/p-> Leo

//using concat
const all_names = girl_names.concat(boy_names)
console.log(all_names); //o/p-> [ 'Emma', 'Olivia', 'Matina ', 'Oliver', 'Leo', 'James' ]


//using spread operator(this is preffered)
const all_new_names = [...girl_names, ...boy_names] //this spreads the elements of an array so that it is treated as an individual element

console.log(all_new_names);//o/p-> [ 'Emma', 'Olivia', 'Matina ', 'Oliver', 'Leo', 'James' ]

//a rare but important situation in array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //flat returns a new array with all sub-array elements concatenated into it recursively upto the specified depth where we use infinity when we are not sure about the depth
console.log(real_another_array);



console.log(Array.isArray("shraddha")) //checks if the given input is array
console.log(Array.from("shraddha")) //converts the input into array
console.log(Array.from({name: "shraddha"})) // gives empty array because here we need to specify whether we need to convert the key or value into array


//converting multiple variable values into array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));