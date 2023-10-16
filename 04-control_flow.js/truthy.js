// const userEmail = []

// if(userEmail) {
//     console.log("Got use email");
// } else {
//     console.log("Don't have user mail");
// }

// false values : 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN (not an number)

// truthy values : 
//  "0", 'false', " ", {}, [], function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObj = {}
// if (Object.keys(emptyObj).lenght === 0) {
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator : null undefined
let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 10
val1 = null ?? 10 ?? 20 

// Ternary operator : 

// Ternary Operator: The “Question mark” or “conditional” operator in JavaScript is a ternary operator that has three operands. It is the simplified operator of if/else.
 
condition ? true : false


input: let result = (10 > 0) ? true : false;
 Output: true

input: let message = (20 > 15) ? "Yes" : "No";
 Output: Yes
