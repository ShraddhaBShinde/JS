const accountId = 1 //can never be changed once declared, if done so will runtime error
// accountId = 2 // not allowed

let accountEmail = "shraddha@google.com" //supports scope{} functionality

var accountPassword = "12345" //avoid using because it dosen't support the scope{} functionality

accountCity = "Pune" //can be used->but prefer not using this way of declaring the variables

let accountState; //after running the code js will assign a value as undefined to this variable



accountEmail = "shinde@outlook.com"
accountPassword = "54321"
accountCity = "Nashik"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])