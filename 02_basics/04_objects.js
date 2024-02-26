// Lecture - 17 🙌
// object singleton -- Object.create
// based on constructor
const tinderUser = new Object();// Singleton object
const tinderUserOne = {};// Object Literal

tinderUser.id = "123abc"
tinderUser.name = "Sarthak"
tinderUser.isLogggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        firstName : "Sarthak",
        lastName : "Vijayvargiya"
    }
}

console.log(regularUser.fullName.firstName);

// see what is optional chaining

const obj1 = {
    1:"a",
    2:"b"
};
const obj2 = {
    3:"c",
    4:"d "
};
const obj3 = {
    5:"c",
    6:"d "
};


const obj4 = {obj1,obj2};

const obj5 = Object.assign({},obj1,obj2,obj3);

console.log(obj4);
console.log(obj5);

// what we use is ---
const obj6 = {...obj1,...obj3};
console.log(obj6);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); 



// Lecture - 18 🙌
// Objects Part - 3

// 
const course = {
    courseName : "JS IN HINDI",
    price : "999",
    courseIns : "Sarthak"
}

// course.courseIns but what if we want it using multiple times so we can desturctor and this is better way

const {courseIns : ins} = course;
console.log(ins);