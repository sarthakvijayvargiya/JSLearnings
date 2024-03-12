// Lecture 14 -- 🙌
// Arrays
// Array is an object
const myArr = [0,1,2,3,'true',true] // elements can be combine of string , number , boolean and can also be seperate

// anathor way to declare array
const myArr2 = new Array(0,1,2,3); 

console.log(myArr[1]);
console.log(myArr2[0]);

// Array methods
myArr.push(6)// to add element in array
console.log(myArr);
myArr.pop()// remove last value
myArr.unshift(9);
console.log(myArr);
myArr.shift();

console.log(myArr.includes(9));// gives true or false
console.log(myArr.indexOf(2)); // gives index if present otherwise -1

const newArr = myArr.join();
console.log(myArr);
console.log(typeof newArr);
console.log(newArr);
// slice, splice

console.log("A", myArr);
const myN1 = myArr.slice(1,3);
console.log(myN1);
console.log("B",myArr);
const myN2 = myArr.splice(1,3);
console.log(myN2);
console.log("C",myArr);

// difference between slice and splice is not just slice exclude last index written and splice include it but also splice cut it from original array and can be seen in printing above to console.

