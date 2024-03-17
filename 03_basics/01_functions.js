// Lecture - 19 🙌🙌
// Functions -- jo bhi code likha h usko ek package m rakh diya or usko jha bhi jitni bhi baar use krna h kar skte h

function myName (){
    console.log("S");
    console.log("A");
    console.log("R");
    console.log("T");
    console.log("H");
    console.log("A");
    console.log("K");
};// this is function

myName() // function execution
myName // function reference

function addTwoNumbers(num1, num2){ // here num1 and num2 are parameter this is just a nomenclature
    console.log(num1+num2);
};

console.log(addTwoNumbers(5,5)); // here 5,5 are argument
console.log(addTwoNumbers(5,"4")); // this gives us wrong data
console.log(addTwoNumbers(5,"ab")); // this gives us wrong data

const result = addTwoNumbers(10,10);
console.log(result);// here we got undefined as addTwoNo. function just call the function and execute it but it does not return something

function addTwoNumberss(num1, num2){
    let result = num1+num2;
    return result;
};

const finalResult = addTwoNumberss(3,3);
console.log(finalResult);
// this is how we got return

// Lecture 20 -- 🙌🙌
// Function part 2 ---

// if we dont know how much argument parameter will be there in a function link shopping cart function
// here comes the knowledge of rest operator *** - it means abhi y sb khule m mil rha h jo bhi h usko ek bundle m pack krke mko dedo
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(100,200,300));// num1 will give us entrie array of values which are passed

const user = {
    userName : "Sarthak",
    price : 199
}

function handleObject(anyObject){
console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);}

handleObject(user);  
