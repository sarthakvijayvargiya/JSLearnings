// Lecture 30 -continuation 🙌🙌 
// Filters and map

const myNumbers = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNumbers.map((num)=>{
   return  num+10
})

console.log(newNums);

// chaining
// chaining means ek method k baad dusra koi method laga skte h jese .map().filter()
const newNums2 = myNumbers
                     .map((num)=>(num*10))
                     .map((num)=>(num+1))  // iske num ki value upr vale k output ki value rahegi so here 1st value of num is 10
                     .filter((num)=>(num>40))
// filter is a game of true and false
// map return value of some kind of opertion
console.log(newNums2);