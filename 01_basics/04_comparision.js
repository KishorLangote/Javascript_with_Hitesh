console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// The reason is that in equality check == and comparision > < >= <= work differently. Comparision convert null to a number, treating as a 0. That's why (4) ans> null >= 0 is true and (1) null > 0 is false. 

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined > 0);

// Very IPM - Clean code has more value

// === : strict code > The strict equality ( === ) operator checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.

console.log("2" === 2);
