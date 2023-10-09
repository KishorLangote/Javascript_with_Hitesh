// Dates

const myDate = new Date()
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//let yourDate = new Date(2023, 0, 9, 12, 2, 102)
// console.log(yourDate.toLocaleString());

//let yourDate = new Date("2023-01-14")
 //let yourDate = new Date("01-14-2023")
// console.log(yourDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(yourDate.getTime());
// console.log(Math.floor(Date.now()/1000));

 let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getFullYear());
// console.log(newDate.getDate());
// console.log(newDate.getMonth());

newDate.toLocaleString('default',{
    weekday: "long",
})
