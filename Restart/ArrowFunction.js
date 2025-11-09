const user = {
    username: "shraddha",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); //to refer current context we use this keyword
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

// console.log(this); //in node this refers to an empty object {} as we don't have any context in global, but if same command is run on web browser it will give you Window object
//in browser the global object is Window
console.log(".............................");


// function chai(){
//     //let username = "shraddha"
//     console.log(this);  //returns an object
// }

// chai()
// console.log(".............................");

// const chai2 =  () => {
//     let username = "shraddha"
//     console.log(this); //gives empty object
// }

// chai2()
// console.log(".............................");

//different ways to write a function
const addTwo = (num1, num2) => {
    return num1 + num2
}

const addTwo2 = (num1, num2) =>  num1 + num2

const addTwo3 = (num1, num2) => ( num1 + num2 )

const addTwo4 = (num1, num2) => ({username: "shraddha"})


console.log(addTwo(3, 4))
