// Lecture 25 -- 🙌🙌
// How does java code execute + Call stack

// Execution context -- code break hoke execute hota h
// Call stack --  code kese memory k ander jayega kese execute hoga or kese bahar aayega

// JS Execution context -- js file ko run kese karegi

// Three type of execution ontext- 
// Global Execution Conext
// Function EC
// Eval EC -- this is present in mangoose etc


// Memory creation phase --- variables vagera ko bs memory allocate hoti h

let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1 + num2;
    return total
}
let result1 = addNum(val1,val2);
let result2 = addNum(10,2);
// C:\Users\vsart\OneDrive\Pictures\Screenshots 
// C:\Users\vsart\OneDrive\Pictures\Screenshots\Screenshot 2023-12-06 163752.png

// 1 --  Global Execution -- sare code gobal Execution se run hote h isko allocate kia jata h this k ander

// 2 -- Memory phase -- sare variable of create krke rakha jata h
// val1 ->undefined
// val2-> undefined
// addNum -> defination - which is - { let total = num1 + num2;
//     return total}
// result1 ->undefined
// result2 -> undefined

// 3 -- Execution phase -- Execution
// val1 <- 10
// val2 <- 5
// addNum -- nothing as execute kuch nahi krna tha defination pelhe hi define kr di h
// result1 - when comming to result1 and called addNum now addNum will create its seperate excution context


// addNum --> new variable envionment + execution thread  - jitni baar bhi y function execute hota h utni baar ek nya box create hota h usko bolte h new executonal context so again memory phase and execution phase take place for addNum this happens each time when function executed and this gets deleted when work is finished

// memory phase for addNum --
// val1 -> undefined
// val2 -> undefined
// total -> undefined

// execution context for addNum --
// num1 -> 10
// num2 -> 5
// total -> 15

// total get return to global execution context

// / 3 -- Execution phase -- Execution continue
// result1 -> 15


// Call stack -- watch video -- LIFO