// From https://www.youtube.com/watch?v=d3jXofmQm44&t=166s
// Shradha Kapra -- Callbacks , Promises & Async Await

// What this chapter is About?
// We will explore about asyncronous programming

// at the end we will have conclusion
// async await >> promise chains >> callback hell

// callback kya hota h callback hell kya hota h unko fight krne k liye promise aaye and then better async await aaye
// callback - a function which is passed as an arugument(parameter) under another function 


// What is Sync in JS
// Synchronous -- ek sequence m code ka execution hona
// Synchronous means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.

/*console.log("One");
console.log("Two");
console.log("Three");  // printing in same order line by line*/

// Asynchronous - //Like getting api data which is time talking process
// Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI. Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

/*console.log("One");
console.log("two");

function hello(){
    console.log("Hello");
}

setTimeout(hello,2000);
setTimeout(function(){
    console.log("Hello from callback");
},3000)
console.log("three");
console.log("four");*/

// this is how asynchronous progrmming

// Callback
// A callback is a function passed as an argument to another function 

/*function sum(a,b){
    console.log(a+b);
}

function cal(a,b,sumCallBack){
    sumCallBack(a,b)
}

cal(1,2,sum);
cal(2,3,(a,b)=>{
    console.log(a+b);
})*/

// Callback hell --
// Nested callback stacked below one another forming a pyramid structure 
// This style of programming becomes difficult to understand and manage

/*function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log(`Data ${dataId}`);
        if(getNextData){
            getNextData()
        }
    },2000)
}

// we want to create a function where we need Data 1 , once it is received then Data 2 , then Data 3

getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4)
        })
    })
});*/
// above code is known as callback hell which is messy and hard to manage 

// Promises
// So, Callbackhell is a problem is JS , jisko solve krne k liye ek chamatkari concept aata h - Promises (vada)

// Promise is for "eventual" completion of task. It is an object in JS.
// It is a solution to callback hell.
// let promise = new Promise((reject, resolve)=>{...})
// resolve reject are callbacks provided by js

// let promise = new Promise((res,rej)=>{
//     console.log("I am a promise");
//     res("success");
// })
// promise is object in JS can have 3 states - pending(result is undefined), fulfilled(resolved), rejected(result is an error object)
// It have 2 handlers - resolve reject y automaically JS se create hote h

/*function getData(dataId,getNextData){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(`Data ${dataId}`);
            if(getNextData){
                getNextData()
            }
            res("success");
        },4000)
    })
}

let promiseData = getData(123);
console.log(promiseData);*/ // promiseData is promise is pending and after 4s it will be fulfilled this is how promise work

// .then() [for fulfilled] & .catch() [for reject]
/*const getPromise = () =>{
    return new Promise((res,rej)=>{
        console.log("I am a promise");
        res("Success");
    })
}

const gotPromise = getPromise();
// console.log(gotPromise);
gotPromise.then((res)=>{
    console.log(`Promise fulfiiled ${res}`);
})
gotPromise.catch((err)=>{
    console.log(`Promise Rejected ${err}`);
})
*/

// Promise chain
// what we want is - first data1 is successfully execute then only data 2 should execute after 4 sec (for this we can do promise chaining)

function asyncFunction1(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Some Data is present 1");
            res("success");
        },4000)
    })
}
function asyncFunction2(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Some Data is present 2");
            res("success");
        },4000)
    })
}

/*let p1 = asyncFunction1();
console.log("fetching some data...1");
p1.then((res)=>{
    console.log(res);
})

let p2 = asyncFunction2();
console.log("fetching some data...2");
p2.then((res)=>{
    console.log(res);
})*/

// solution 1
/*console.log("fetching data1...");
let p1 = asyncFunction1();
p1.then(()=>{
    console.log("fetching data2...");
    let p2 = asyncFunction2();
    p2.then();
})*/


function getData(dataId){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(`Data ${dataId}`);
            res("success");
        },4000)
    })
}

// solution 2
/*getData(1)
    .then(()=>{
        return getData(2);
    })
    .then(()=>{
        return getData(3);
    })
    .then((res)=>{
        console.log(res);
    })*/


// Async - Await --
// async function always returns a promise
// async function myFunc(){}
// await(kishi chiz ka intezar) pauses the execution of its surrounding async function until the promise is settled

async function hello(){
    console.log("hello");
}
hello()

function api(id){
    return new Promise((res)=>{
        setTimeout(function (){
            console.log(`weather data ${id}`);
            res("succ");
        },2000)
    })
}

// IIFE
(async function (){
    await api(1);//1st call
    await api(2);//2nd call
})();
// above code is far better than callbackhell and promise then