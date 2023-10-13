// Scopes -> {}
// Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript. The two types of scope are local and global: Global variables are those declared outside of a block. Local variables are those declared inside of a block

// let a=10
// const b=3
// var c=4

let c = 400

if (true) {
    a = 10
    // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    two()
}

// one()

if (true) {
    const username = "hitesh"

    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
}


//+++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
}

// ++++++++++++++++++ Hoisting +++++++++++++++++++++++++++

// In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

addTwo(5)

const addTwo = function(num){
    return num + 2
}
