// Immediately Invoked Function Expressions (IIFE)
//these are used to run the function immediately and is especially used to protect the function from the pollution of global variables


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( () => {
    console.log(`DB CONNECTED TWO`);
} )();

( (name) => {
    console.log(`DB CONNECTED ${name}`);
} )('shraddha')