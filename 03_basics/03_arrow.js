const user = {
    username: "kishor",
    price: 499,

    welcomeMassege: function() {
        console.log(`${this.username} welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMassege()
// user.username = "sam"
// user.welcomeMassege()

// console.log(this);



// This keyword = current contaxt  
// The this keyword refers to different objects depending on how it is used: In an object method, this refers to the object. Alone, this refers to the global object. In a function, this refers to the global object.


// The Browser Object Model (BOM) : 

// - There are no official standards for the Browser Object Model (BOM).
// Since modern browsers have implemented (almost) the same methods and properties for JavaScript interactivity, it is often referred to, as methods and properties of the BOM.

// The Window Object :

// - The window object is supported by all browsers. It represents the browser's window.
// - All global JavaScript objects, functions, and variables automatically become members of the window object.
// - Global variables are properties of the window object.
// - Global functions are methods of the window object.


// function chai() {
//     let username = "sam"
//     console.log(this);
// }
// chai()

// const chai = function() {
//     let username = "sam"
//     console.log(this);
// }

// chai()

// const chai = () => {
//     let username = "sam"
//     //console.log(this);
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// JavaScript Implicit Conversion
// In certain situations, JavaScript automatically converts one data type to another (to the right type). This is known as implicit conversion.

// const AddedTwo = (num1, num2) => num1 + num2
// const addedTwo = (num1, num2) => (num1 + num2)

const addedTwo = (num1, num2) => ({username: "sam"})

console.log(addedTwo(5,7));