// Lecture 4 --🙌


const accountId = 144553
// const ko change nhi kia ja skta chahe tho apan bhi chnage nhi kr skte
let accountEmail = "hitesh@google,com"
var accountPassword = "12345"
let accountState; // this is undefined
accountCity = "Jaipur"

// In Js we can declare variables with 2 types const and var
// const is for constant and for variable we use let here we use let becuase var doesnot know what is block scope nd functional scope i.e {   }
// Function Scope: When a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function. Block Scope: A variable when declared inside the if or switch conditions or inside for or while loops, are accessible within that particular condition or loop

// accountId =  2 //not allowed as it is const.

accountEmail = "ahaha@gmail.com"
accountPassword="2121212"
accountCity = "Bglr"
console.log(accountId);

// here we can write all variables in a table format
console.table([accountEmail,accountId,accountPassword, accountCity,accountState]);
