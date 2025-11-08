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

//Scope level and mini hoisting in javascript
function one(){
    const username = "shraddha"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //can't access as it is outside the scope

     two()

}

one() //o/p-> shraddha  (concept of closure)

if (true) {
    const username = "shraddha"
    if (username === "shraddha") {
        const website = " youtube"
        // console.log(username + website);
    }
    //console.log(website); //gives error as not defined
}

//console.log(username); //gives error as not defined


// ++++++++++++++++++ Hoisting ++++++++++++++++++


console.log(addone(5)) //this runs without error and gices o/p->6

function addone(num){
    return num + 1
} 



// addTwo(5) //gives error cannot access "addTwo" before initialization
// const addTwo = function(num){
//     return num + 2
// }