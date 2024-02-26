// Lecture 12 -- 🙌

// ************ Number **************
const score = 400;
console.log(score);
const balance = new Number(100);
console.log(balance);

// we can also get Number prototype which is mainly different methods available for number to use like in string if we talk about 1 method is toString with help of this we convert number to string and then we can use any additional method present on string.
// go through MDN while revising
// some other methods toFixed, toLocaleString, toPrecision

// ************** Math ***************
// Math Library used for many things and it is a object try typing it in console

console.log(Math);//Math.PI,Math.abs,Math.round , Math,random()

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()));

const min = 10;
const max = 80;

console.log(Math.floor(Math.random()*(max-min+1)+min));
// Do through Mdn while revising can also rewatch video

