// Lecture 30 - continue - 🙌🙌

// reduce method -- good for something like shopping cart

const myNums = [1,2,3];


const sum = myNums.reduce((acc,currVal)=>{
    console.log(`acc - ${acc} , currVal - ${currVal}`);
    return acc+currVal;
},3)

console.log(sum);

const shoppingCart = [
    {
        courseName : "Js course",
        price : 2999
    },
    {
        courseName : "Py course",
        price : 999
    },
    {
        courseName : "Mobile course",
        price : 5999
    },
    {
        courseName : "Data course",
        price : 12999
    },
];

const priceTotal = shoppingCart.reduce((acc,currTotal)=>{
    const price = currTotal.price;
    return acc + price;
},0);

console.log(priceTotal);


