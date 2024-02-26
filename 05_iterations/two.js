// Lecture 29 -- 🙌🙌
// High Order Array loops


// this loops are more array specific loops

//  For of loop - 
// ["","",""]
// [{},{},{},{}] // common scenarios

const arr = [1,2,3,4,5];

for (const iterator of arr) {
    console.log(iterator)
}  // iterator is something like arr[i]

const greetings = "Hello world";

for (const greet of greetings){
    console.log(`Each char of ${greet}`);
}

// Maps --works in key value pair map has unique values in same order
const map = new Map();
map.set("IN","India")
map.set("US","United States of America")
map.set("Fr","France")
map.set("IN","India") 
console.log(map);

for (const [key , value] of map) {
    console.log(`${key} :- ${value}`);
}// this is how for-of loop works on map but this is not how object can iterate
