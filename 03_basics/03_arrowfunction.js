// Lecture 23 -- 🙌🙌
// this and arrow function


const user = {
    userName : "Sarthak",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.userName},  welcome to website`);
        // console.log(this);
    }
}
// jb bhi current context ko refer krna h tho use this KW current context is user scope {}

user.welcomeMessage()
user.userName = "Hitesh"
user.welcomeMessage() 

console.log(this); // here we get current context as empty as we are in node environment so this is refrring to empty object as there is no global object but when we use this in browser we get windows object ,  so browser k ander jo sbse jyada global object h vo h windows

// function chai() {
//  console.log(this);
// }
// chai()

// function chai() {
//     let userName = "Sarthak"
//  console.log(this.userName); // here we get undefined as this.username only work in objects not in function
// }
// chai()

const chai = () =>{
    console.log(this)
}

chai()
//  1 doubt here as why this in arrow function has nothing and this in normal function has something
// good doubt deep dive in it

// In Arrow function -- explicit return / explicit function

// const addTwo = (num1,num2) =>{
//     return num1+num2;
// }

// Implicit return
const addTwo = (num1 , num2) => num1+num2; // this is 2nd way to declare arrow function when we dont have more than 1 line

const addThree = (num1,num2) =>(num1 + num2)// if we pass in curly braches we dont have to add return statement this is very much used in react



