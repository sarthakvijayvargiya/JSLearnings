// Lecture -- 8 🙌

// simple(same type conversions) conversions are easy

/*console.log(2>1);
console.log(1<=2);
console.log(1!=2);
console.log(1==2);
console.log(1>=2);*/
 

// but comparision with different datatypes is difficult and answer is not predectable so we need to be careful in that situation

console.log("2">1);
console.log("02">1);
//here typescipt is good as it gives strict rule that two types are not compared

console.log(null>0);
console.log(null == 0);
console.log(null>=0);
// the reason is that an equality check == and comparision > <= >= < works differenty
// comparision convert null to a number, treatng it as 0. thats why (3) null >=0 is true and (1) null>0 is false

// === this is strict check also known as thriple equal to

console.log("2"==2); // this turns out true as internal conversion takes place from string to number

console.log("2"===2); // this is false as === also check the type       