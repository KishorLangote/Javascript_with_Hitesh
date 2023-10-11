// singleton
// object literals

// object literals

const mySym = Symbol("key1")

const JsUser = {
    "full name" : "kishor langote",
    name : "kishor",
    age : 15,
    city : "pune",
    [mySym] : "key1",
    email : "kishor@airbin.com",
    isLoggedIn : false,
    LastloginDays : ["monday", "sunday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "kishor@google.com"
//Object.freeze(JsUser)
JsUser.email = "kishor@microsoft.com"

// Freeze - Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
