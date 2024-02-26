// Lecture 29 -- 🙌🙌

// continuation --

const myObj = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift by apple'
}

// for object iteration forin loop is working
for (const key in myObj) {
    console.log(`${key} key and its value is ${myObj[key]}`);
}

// for-in loop for iteration over
const programming = ["js", "rb","py","java","cp"];

for (const key in programming) {
    console.log(programming[key]);
}


// for each loop for arrays--
// foreach , map are present as array prototype like array.length which can be seen by inspecting and printing an array , because everyone knows if array comes we need to iterate it
const codingProgramming = ["js", "rb","py","java","cp"];

// just see this part video again
// callbackfn - mtlb mujhe ek function dedo ki mujhe kya krna h -- callbackfn is just function ka name nhi hota h , parameters ka name kuch bhi ho ab vo itna smart hota h ki vo each value p jayega yha mene item name diya h
// these type of function foreach forin forof are smart as they know how much data length etc are present in object, array etc
codingProgramming.forEach(function (item){
    console.log(item);
})
codingProgramming.forEach( (i)=>{
    console.log(`${i} part 2`);
}) // normal arrow function looks like const name = ()=>{} -- ab name dena nhi hota h callback function m so we just give ()=>{}

function printMe (item){
    console.log(item);
}

codingProgramming.forEach(printMe); //dont execute it just give reference

codingProgramming.forEach((item,index,arr)=>{
    console.log(item , index , arr);
})

const myCoding = [
    {
        langName : "Js",
        fileName : "js"
    },
    {
        langName : "Java",
        fileName : "java"
    },
    {
        langName : "Python",
        fileName : "py"
    }
]

myCoding.forEach((item)=>(
    console.log(item.fileName, item.langName),
    console.log(item.fileName)
));