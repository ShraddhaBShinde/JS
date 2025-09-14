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

//declaring singleton object
//const singleton_object = new Object()

//declaring non-singleton object
const non_singleton_object = {}

non_singleton_object.id=1
non_singleton_object.name="Shraddha"
non_singleton_object.isLoggedin=true

console.log(non_singleton_object)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Shraddha",
            lastname: "Shinde"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

//merging objects
const obj1 = {
    1: 'a',
    2: 'b'
}

const obj2 = {
    3: 'c',
    4: 'd'
}

//const obj1_2 = Object.assign({}, obj1, obj2)  //not used much
//console.log(obj1_2)

const obj1_2 = {...obj1, ...obj2}
console.log(obj1_2)

console.log(Object.keys(regularUser))
console.log(Object.values(regularUser))

//destructuring of object
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "shraddha"
}

// course.courseInstructor

const {courseInstructor: instructor} = course //extracting courseInstructor from course object

// console.log(courseInstructor);
console.log(instructor);