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