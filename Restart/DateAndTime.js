// Date

let date = new Date() //typeof date is object
console.log(date) //o/p->2025-07-17T02:53:26.262Z
//This is the ISO 8601 format string representing a date and time in UTC (Coordinated Universal Time).The Z at the end stands for Zulu time, which is another name for UTC.

//date = date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }); //force output in IST (UTC+5:30), it converts the type to string
//console.log(date) //o/p->17/7/2025, 8:37:50 am
console.log(date.toString()) //o/p->Thu Jul 17 2025 03:00:45 GMT+0000 (Coordinated Universal Time)

console.log(date.toLocaleString()) //7/17/2025, 3:14:18 AM
console.log(date.toDateString()) //Thu Jul 17 2025

let myCreatedDate = new Date("01-14-2023") 
console.log(myCreatedDate.toLocaleString()); //o/p->1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp); //gives milliseconds from 1 JAN 1970 to current
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); //gives seconds without decimal

let newDate = new Date()
//console.log(newDate);
console.log(newDate.getMonth() + 1); //gives current month (+ 1 because js starts the month index from 0)
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `
