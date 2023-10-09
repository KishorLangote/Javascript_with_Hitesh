const name = "kishor"
const repoRate = 8
console.log(name + repoRate+ " value");

console.log(`Hello my name is ${name} and yearly repo rate is ${repoRate}`);

//Backticks are an ES6 feature that allows you to create strings in JavaScript. Although backticks are mostly used for HTML or code embedding purposes, they also act similar to single and double quotes. Besides, using backticks makes it easier for string operations.


//string interpolation method - In computer programming, string interpolation (or variable interpolation, variable substitution, or variable expansion) is the process of evaluating a string literal containing one or more placeholders, yielding a result in which the placeholders are replaced with their corresponding values.

const gameName = new String('kishor-nl')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase()); // uppercase

// which character are present on that position
console.log(gameName.charAt(5));     

// what is position(in numbers) of character
console.log(gameName.indexOf('r'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8, 3)
console.log(anotherString);

//  The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

const newStringOne = "    kishor   "
console.log(newStringOne);
console.log(newStringOne.trim()); // remove starting & ending space

// replace 

const url = "https://hitesh.com/hitesh%%30robert"

console.log(url.replace('%%30', "_"));

// The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.

console.log(url.includes('nitesh'));


