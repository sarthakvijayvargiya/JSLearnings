// Lecture 24 -- 🙌🙌
// IIFE - immediately invoked function expression (IIFE)

// Apan ne jo function likha vo immedialy execute ho jaye
// why use iife -- kyi baar global scope k pollution se problem hoti h

(function chai(){
    console.log("DB Connected");
})(); // semicolon is imp remember why (code ko end krne k liye)
// () se automatically ek block ban jata h
// ()// fist () where we write fucntion defination , () 2nd function execution like chai()

(()=>{
    console.log("DB connected to");
})();

((name)=>{
    console.log(`DB Connected ${name}`);
})("Sarthak")