const tinderUser = new Object()
// //const tinderUser = {}

tinderUser.id = "abcd@1342"
tinderUser.city = "Pune"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

// const realUser = {
//     email: "google@123.com", 
//     fullname: {
//         userfullname: {
//             firstname: "kishor",
//             lastname: "langote"
//         }
//     }
// }
    


// console.log(realUser.fullname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}

// //const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)


// console.log(obj3);


const users = [
    {
        id: 1,
        email: "kishor@google.com"
    },
    {
        id: 1,
        email: "kishor@google.com"
    },
    {
        id: 1,
        email: "kishor@google.com"
    },
    {
        id: 1,
        email: "kishor@google.com"
    },
    {

    },
]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('city'));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
 
//this objects printing two types : 

// course.courseInstructor  --1 

const {courseInstructor: instructor} = course   


// de-structuring ->
// Destructuring is a JavaScript expression that allows us to extract data from arrays, objects, and maps and set them into new, distinct variables. Destructuring allows us to extract multiple properties, or items, from an array​ at a time.

//console.log(courseInstructor);
console.log(instructor);

// JSON FORMAT STRUCTURE

{
    "name": "hitesh"
    "id": "hitesh@google.com",
    "price": "free"
}

[
    {},
    {},
    {}
]
