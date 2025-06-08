//Stack 
// It is used by primitive datatypes and we get a copy of data

let myName="shraddha"
let userName=myName //makes a copy
userName="shraddha02"

console.log(myName) //op-> shraddha
console.log(userName) //op-> shraddha02

//Heap 
//It is used by non-primitive datatypes and we get the ref of data instead of actual data

let userObject1 = {
    email: "userObject1@google.com",
    age: 18
}

let userObject2 = userObject1 //refs the data

console.log(userObject1.email)// before changing op->userObject1@google.com
console.log(userObject2.email)// before changing op->userObject1@google.com

//only changing the userObject2 email
userObject2.email = "user@google.com"

console.log(userObject1.email) //after changing op->user@google.com
console.log(userObject2.email) //after changing op->user@google.com
