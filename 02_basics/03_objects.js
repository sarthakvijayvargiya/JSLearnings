// if you want to learn js --- learn entierly of two thing objects and events - a fact


// Lecture - 16 🙌
// Objects
// There are two ways to declare objects - Literal , constructor

// singleton - koi bhi constructor se jb bnate h tho singleton object bnta h or  jb dusri trah se bnate h tho uske multiple instance ban jate h (abhi js itna yad rakho)
// jb bhi Literal se define krte h tho singleton nhi bnta

// Object Literals --
// works like - Key and values
const sym = Symbol("Key1");
const jsUser = {
    name : "Sarthak",
    age : 18,
    [sym]:'key details',
    location : "Biaora",
    isLoggedIn : false,
    lastLogin : ["Monday","Saturday"]
};
// In object the keys i.e name, age etc are by default treated as string.

// ways to access object data
console.log(jsUser.age);
console.log(jsUser["age"]);// in doublequotes because key are treated as string and this a one way to access this.
console.log(typeof sym);


jsUser.age = 22;
console.log(jsUser);
Object.freeze(jsUser); // object.frezze help us to frezze the object so no chnages can be take place later on 
jsUser.age = 52;
console.log(jsUser);

jsUser.gretting = function(){
    console.log("Hello Js User");   
}

jsUser.grettingTwo = function(){
    console.log(`Hello Js User , ${this.name}`);   
}// here if we want to refer same object we can use this keyword

console.log(jsUser.gretting);// got function reference returned later this is needed not now
// console.log(jsUser.gretting());
// console.log(jsUser.grettingTwo());