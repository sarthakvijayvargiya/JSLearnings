// Lecture 13 -- 🙌
// ********** Date and time In depth ***********

// Date object in mdn represent a single moment in any platform it is calculated fom start from jan 1 1970
// Go through Mdn while revising

let myDate = new Date();// instance of an object
console.log(myDate.toString()) // Many .to are present try all of them like below
console.log(myDate.toDateString());
let myCreatedDate = new Date(2023,0,23);
console.log(myCreatedDate.toLocaleString());
console.log(typeof myDate)
let mmddyyFormat = new Date('01-22-2023');

//  Time Stamps

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(mmddyyFormat.getTime())

myDate.toLocaleString('default',{
    weekday:"long"
})