//DATES

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);                               //object

// let myCreateDate = new Date(2023,8,7)
// let myCreateDate = new Date(2023,8,7,5,6)

// let myCreateDate = new Date("2023-01-14")

// let myCreateDate = new Date("01-14-2023")

// console.log(myCreateDate.toLocaleString());


// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());



newDate.toLocaleString('default',{
weekday:"long",
})






