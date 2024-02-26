// Lecture 42
// Object literal

const user = {
    username  : 'Sarthak', // property
    loginCount : 8, // property
    signedIn : true, // property
    getUserDetails : function(){
        console.log("Got details");
        console.log(`username : ${this.username}`);
        console.log(this);
    } // method
} // base unit in js


console.log(user.username);
console.log(user.getUserDetails());

// Concept - if we define 2 array in browser console let say arr1, arr2 , so how do prototype method (ex-map) knows that they have to loop on specific array then happens with the help of this keyword

console.log(this); // this in node is empty but this in browser is entire window object


// Constructor function - new keyword is knows as contructor function

// const promiseOne = new Promise();
const date = new Date();
// Here , we can create multiple instances of objects with the help of new keyword

function User (username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this; // here (this) is explicit return if we dont return (there will be implicit return of this (automatic))
}

// const userOne = User('Sarthak', '12', true);
// const userTwo = User('Vijay','12',true);
// console.log(userOne);// here , we can see that userOne data is override by userTwo this is call by reference concept

//  wee need to create different instances of a object to store different data
const userOne = new User('Sarthak', '12', true);
const userTwo = new User('Vijay','12',true);
console.log(userOne);
console.log(userTwo);
// Step 1  -- with help of new keyword new instance of object is created
// step-2 -- constructor function call hota h
// step-4 -- (argument vagera pack kr deta h)
// step-5 -- hmko de deta h 