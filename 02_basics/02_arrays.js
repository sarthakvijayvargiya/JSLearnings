// Lecture -- 15 🙌
// Array Part - 2

const marvelHeros = ["thor", "ironman","spider"];
const dcHeros = ["superman", "flash","batman"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);
// this will put dcHeros array to marvelHeros array

// console.log(marvelHeros[3][1]);

// const newHeros = marvelHeros.concat(dcHeros); // gives new array with combining both arrays into one arrays
// console.log(newHeros);

// spread operator *** (this is preferred)
// spread means kaach ka glash pheka thoda pura bikhar means spread ho gya (syntax ... (three dot))

const newAllHeros = [...marvelHeros,...dcHeros];
console.log(newAllHeros);

const anotherArray = [1,2,3,[4,5,6],[5,6,[7,8]]];
const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);

console.log(Array.isArray('Sarthak'));
console.log(Array.from("Sarthak"));
console.log(Array.from({name:"Sarthak"})); //interesting as it gives empthy array when it is not able to convert data to array

let score1 =100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));

