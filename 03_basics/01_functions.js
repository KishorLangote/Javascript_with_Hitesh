// Functions -  JavaScript function is defined with the function keyword, followed by a name, followed by parentheses (). Function names can contain letters, digits, underscores, and dollar signs (same rules as variables). The parentheses may include parameter names separated by commas: (parameter1, parameter2, ...)


function myName() {
    
    console.log("K");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("O");
    console.log("R");

}

//myName()

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(5, 2)

// console.log("Result: ", result);

function loginUsermessage(username = "john") {
    //if(username === undefined)
    if(!username)    {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUsermessage("kishor"));
//console.log(loginUsermessage("kishor"));


// The parentheses may include parameter names separated by commas:
// (parameter1, parameter2, ...)

// The code to be executed, by the function, is placed inside curly brackets: {}

// function name(parameter1, parameter2, parameter3) {
//   // code to be executed
// }
// Function parameters are listed inside the parentheses () in the function definition.

// Function arguments are the values received by the function when it is invoked.

// Inside the function, the arguments (the parameters) behave as local variables.

// Rest operator or spread operator -> ...

function calculateCartPrice(val1, val2, ...numb1){
    return numb1
}
//console.log(calculateCartPrice(3, 5, 54, 8));

const user = {
    username: "kishor",
    price: 400
}

function handelObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
}
// handelObject(user)
handelObject({
    username: "sam",
    price: 399
})

const myNewArray = [100, 254, 548, 542, 5487]

function secondValue(getArray){
    return getArray[1]
}
// console.log(secondValue(myNewArray));
console.log(secondValue([100, 254, 548, 542, 5487]));