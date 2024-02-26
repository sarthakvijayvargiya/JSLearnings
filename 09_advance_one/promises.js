//  Lecture 40 🙌🙌 
//  Promises 


// How does this promises come -- Watch till 11 minute

//  Mdn Doc --  
//  Promise - ko vo bhi task diya h vo abhi k abhi lagke complete nhi hoga , queue m tho lag gya h lkin abhi usko load nhi kiya gya h
//  Jaruri nhi h sare kam abhi ho ,jese database ko request bheji h or vo kishi or continent m h tho time le rha h ya fir uspe kuch operation perform krna h isliye time le rha h , cryptography m bhi time lagta h -- password ko encrypt decrpt krne m , is type k bhot sare case hote h jha hm async.. programming krte h

//  tho iske liye 2 options h -- async await laga le , jb tk kaam nhi ho rha tb tk wait kre asyncronous operation h lkin modern programming m promises laga lete h (promise future m jake complete hota h)

// there are two part - creation and consumption..

// Creation of promise
const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // Do DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async Task is completed');
        resolve(); // call resolve method execute and connected to .then()
    },1000)

})

// consumption of promise
// .then and resolve is interconnected with each other
promiseOne.then(function(){
    console.log('Promise Consumed');
})


// Promise 2
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async Task 2');
        resolve();
    },2000)
}).then(function(){
    console.log('Async 2 consumed');
})

// Promise 3
// jb bhi is type ka syntax h hm usko consume krte h tho resolve k ander jo parameter pass kete h vo then m mil jata h
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName : 'Sarthak', email:'sss@gmail.com'})
    },3000)
})

promiseThree.then(function(user){
    console.log(user);
})


// Promise 4

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({userName:'Sarthak',password:'1234'})
        }else{
            reject('ERROR: something went wrong');
        }
    },4000)
})

// what is callback hell
// like resolve is connected with then , same way reject is connected with catch
promiseFour
.then((user)=>{
console.log(user);
return user.userName;
// this is call chaining whatever we return from 1st then will get in 2nd then this is very helpful in DB's
})
.then((userName)=>{
    console.log(userName);
})
.catch((error)=>{
    console.log(error);
}).finally(function(){
    console.log('The Promise is either resolve or rejected');
})

// Async Await
// thodi der wait krta h kaam hone ka agar vo hota h thohi aage badhta h nito vahi error de deta h

// Promise 5
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({userName:'JS',password:'123'})
        }else{
            reject('ERROR: JS went wrong');
        }
    },4000)
})

async function consumePromiseFive(){
    try{
        const res = await promiseFive
        console.log(res);
    }catch(err){
        console.log(err);
    }
}
consumePromiseFive();

async function getAllUsers(){
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json();
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
return res.json();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})

// Lecture 41 🙌🙌
// Fetch Discussion