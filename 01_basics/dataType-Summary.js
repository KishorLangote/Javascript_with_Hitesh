// Primitve data types : 
// 7 types : String, Number, Boolean, undefined, symbole(make a unique), BigInt(use in scientific value), null.


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 2546874458875542455568855n

// Non-primitive/Reference data types :
//3 types : Array, objects, functions.

const heros = ["shaktiman", "john", "maharaj"]; 

// const myObj = {
//     name: "kishor",
//     age: 18,
// }

// const myfunction = function(){
//     console.log("Hello World");
// }

console.log(typeof heros);


// memory types : Stack(permitive), Heap(Non-permitive)

let myYoutubeName = "kishorlangotedotcom"
let anotherName = myYoutubeName
console.log(anotherName);
