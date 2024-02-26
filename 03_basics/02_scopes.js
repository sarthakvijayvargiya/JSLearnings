// Lecture 21 -- 🙌🙌
// Scopes

// let a  = 10;
// const b = 20;
var c = 300;

{}// this is scope

if(true){
    let a  = 10;
    const b = 20;
    var c = 30;
}
// here we declared a,b,c inside if statement which is a scope as scope is anything with {} so a,b,c should ideally only work inside this if statement

// console.log(a);
// console.log(b);
console.log(c);
// above var c we declare outside if and inside also but we got wrong output that si the probelm with var and var scope

// Global Scope - outside if or any scope is global scope and its value is present inside block scope , but block scope value is not present outside it.
// block scope -- any scope like if else function {} etc is block scope 

let d = 20;
let e = 100;
if(true){
    d  = 10;
    let e = 30;
    console.log(`INSIDE ${d} ${e}`);
}

console.log(`OUTSIDE ${d} ${e}`);


// Lecture 22 -- 🙌🙌
// Scopes part 2 --

function one(){
    const userName = "Sarthak";

    function two(){
        const website = "youtube.com";
        console.log(userName);
    }
    // consol e.log(website);
 
    two()
}

one()

// Here we can remember by one ex -- chota bade se icecream le skta h , mang skta h lkin bada chote se nahi same username name bade scope m h or function two k liye vo global scope h lkin function one k liye fuction two chota scope h

// ----------------  Interesting ex ---------------

console.log(addOne(5));
function addOne(num){
    return num +1;
}


const addTwo = function(num){ // this type of function invoking is also known as expression
    return num + 1;
}
addTwo(4); // this cannot be declared above expression declaration

