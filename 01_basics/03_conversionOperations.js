
// Lecture 6 -- 🙌

// we have to convert in differt types
/*let score = "33";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber); */ // someone types number in score string then converting it to number works fine.
// but what if
/*let scoreOne = "33abc"
let valueInNumberOne = Number(scoreOne)
console.log(typeof valueInNumberOne)
console.log(valueInNumberOne)*/ //this gives us NaN as abc cant be converted to number this is the one problem

// Number // something related to class based

// "33" => 33
// "33abc"=> NaN
// true => 1, false=>0
// null=>0

/*let isLoggedIn = undefined;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);*/

// 1=> true, 0=> false
// ""=> false, "sarthak"=>true
// null=> false, undefined=> false

// this is how we convert from one form to another form of datatype and we need this kind of operations as most data we get in form of jsx -string format and we may need to convert that in number etc.


// Lecture 7 -- 🙌
// *************** Operations ***************

let value = 3;
let negValue = -value;
/*console.log(negValue);

console.log(2+2);//add
console.log(2-2);//sub
console.log(2*2);//multiply
console.log(2/2);//divide
console.log(2%2);//remainder
console.log(2**3);//2^3*/

let str1 = "Hello";
let str2 = " Sarthak";
let str3 = str1+str2;
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log(1+2);
console.log("1"+2+2);
console.log(2+2+"1");

