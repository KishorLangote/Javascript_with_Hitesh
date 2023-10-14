// if
// const IsUserloggedIn = true
// const temperatur = 41

// if(temperatur === 40) {
//     console.log("temperature is less than 50");
// } 
// else {
//     console.log("temperature is greator than 50");
// }
// console.log("temperature is greator than 50");

//>, <, <=, >=, =, ==, ===, !=, !==  


const score = 200

// if(score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);


// ++++++++++++++++++ var variable ++++++++++++++++++++++++

// Global Variables are the variables that can be accessed from anywhere in the program. These are the variables that are declared in the main body of the source code and outside all the functions. These variables are available to every function to access. Var keyword is used to declare variables globally.

// if(score > 100) {
//     var power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// const balance = 1000
// if(balance > 500) console.log("test"); 

// if(balance < 500) {
//     console.log("balance less than 500 ");
// } else if (balance < 750) {
//     console.log("balance less than 750 ");
// } else if (balance < 900){
//     console.log("balance less than 900 ");
// } else {
//     console.log("balance less than 1200 ");
// }

const UserloggedIn = true
const debitCard = true
const LoggedFromGoogle = true
const loggedFromEmail = false

if(UserloggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if(LoggedFromGoogle || loggedFromEmail) {
    console.log("User logged in");
}