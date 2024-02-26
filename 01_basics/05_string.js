// Lecture 11 -- 🙌

const name = "Sarthak";
const repoCount = 50;

// right way to write
console.log(`My name is ${name} and my repo count on github is ${repoCount}`);

// another way to define string is 
const gameName = new String('Sarthak')
// we get the above string as object that can be seen on browser console and its protoytype are the method present for string to do different operaions
console.log(name[0]);
console.log(typeof String); // type of gameName is -- object
console.log(name.length);
console.log(name.toUpperCase());
console.log(gameName.length);
console.log(gameName.toUpperCase());

// there are many methods (prototype present for string like charAt, trim , slice,replace, and many more) we can use and go through them when we use string and need to do any operation with them as almost every method is present what we can think of.z
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String