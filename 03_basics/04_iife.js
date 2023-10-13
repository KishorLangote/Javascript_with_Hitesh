// Immediately Invoked Function Expression (IIFE): 
// An IIFE (Immediately Invoked Function Expression) is a function that runs the moment it is invoked or called in the JavaScript event loop. Having a function that behaves that way can be useful in certain situations. IIFEs prevent pollution of the global JS scope. To prevent global pollution its used immediately invoked function expression.
// https://www.geeksforgeeks.org/immediately-invoked-function-expressions-iife-in-javascript/

(function chai(){
    console.log(`DB CONNECTED`);
})( )
()()