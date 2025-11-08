var c = 400
let a = 300
if (true) {
    let a = 10
    const b = 20 //
    console.log("INNER: ", a); //this will print the inner a value i.e 10 as we are logging it from block
    
}


console.log(a);
//console.log(b); // will not run as b will be not identified outside the block scope as it is declared inside the block
console.log(c);