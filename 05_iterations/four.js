// Lecture 30 --🙌🙌
//  Filters and Map

const codingProgramming = ["js", "rb","py","java","cp"];

const value = codingProgramming.forEach((item)=>{
    console.log(item);
})

console.log(value); // this means it does not return value

const myNums = [1,2,3,4,5,6,7,8,9,10];

const newNums  = myNums.filter((num)=>(num>4)) // filter can return the values
const newNums1  = myNums.filter((num)=>{return num>4}) // upr parentheses tho implicit  (automatic return ) ho rha tha ab curly braces h tho khud se return (explicit return) krna padh rha h 

const newNums2 = []

myNums.forEach((item)=>{
    if(item>4){
        newNums2.push(item)
    }
})

console.log(newNums2);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBook = books.filter((book)=>{
    if(book.genre === "History" && book.publish >= 1995){
        return book;
    }
  })
  console.log(userBook);