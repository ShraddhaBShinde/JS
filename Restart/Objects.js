// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Shraddha",
    "full name": "Shraddha Shinde",
    [mySym]: "mykey1",
    age: 18,
    location: "Pune",
    email: "shraddha@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "shraddha@chatgpt.com"
// Object.freeze(JsUser) //this will not let us change the value of the keys inside the object
JsUser.email = "shraddha@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());