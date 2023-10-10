const marvel_heros = ["spiderman", "shaktiman", "maharaj"]
const bc_heros = ["atorney", "advocate", "lawyer"]

//const allHeros = marvel_heros.push(bc_heros)

//console.log(marvel_heros);

const allHeros = marvel_heros.concat(bc_heros)

//console.log(allHeros);

const newHeros = [...marvel_heros, ...bc_heros]
console.log(newHeros);

const anotherArray = [1, 2, [8, 9, 5, [4, 5], [1, 6]],]
const newanotherArray = anotherArray.flat(Infinity)

console.log(newanotherArray);

console.log(Array.isArray("kishor")); 
// The Array.isArray() static method determines whether the passed value is an Array.
console.log(Array.from("45787"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));