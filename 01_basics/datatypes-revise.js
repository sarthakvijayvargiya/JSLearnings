// Lecture 9 --🙌

// there are mainly two dataypes --- primitive and non primitive
// they are based on call by value and call by reference
// based how they are being stored and accesed through memory

// # Primitive -- 
//  Call by value -- jb bhi inko kahi se kahi copy krte hai tho inki original data ka reference nahi milta memory location ka inko copy krke dete hai or usme jo bhi changes krte h vo copy m changes hote hai
// 7 Types -- String , Number, Boolean, Null, undefined, Symbol(kishi bhi value ko unique banane k liye symbol use krte h), bigInt

// # ReferenceType (Non-primitive)
// Call by reference -- Inka memory reference directly allocate kia ja skta hai
// Array, Object, Function

// https://262.ecma-international.org/5.1/#sec-11.4.3


// Lecture 10 -- 🙌
// Memories -- Stack (Used in Primitive) - got copy, Heap (Used in Non- Primitive) -- got refernce if anything changes it will chnage in original

let myName = "Sarthak";
let myFullName = myName;
myFullName = "Sarthak Vijayvargiya"

console.log(myFullName);
console.log(myName);
// Here we can see that stack is used by changing myFullName myName didnot got changes


// Here Obj is Non Primitive where we got original reference
let userOne = {
    name : "Sarthak",
    email : "sarthak@ybl"
}

let userTwo = userOne; // here we get reference

userTwo.email = "vijay@axl"

console.log(userOne);
console.log(userTwo);

// If didnot understood go through lecture