// let sum = function (a, b) {
//   let c = a + b;
//   console.log("Hello");
//   return c;
// };

// sum(5, 5); //argument
// sum(20, 5);

// function iterable(num) {
//   for (let i = 1; i <= num; i++) {
//     console.log(i);
//   }
// }

// iterable(10);
// iterable(100);

// console.log(sum);

//ARROW FUNCTION

// let arrowGreeting = (a, b) => a + b;

// console.log(arrowGreeting(50, 5));

//Anonymous functions

// function greeting(...name) {
//   console.log(`Hello ${name}`);
// }

// greeting("Laman", "Ilaha", "Yusif", "Zamir", "Firangiz");

//Currying function

// let add = (a) => (b) => console.log(a + b);

// add(2)(3);

// function greeting(name, callback) {
//   console.log(`Hello ${name}`);
//   callback();
// }

// function callback() {
//   console.log("Hello from callback");
// }

// greeting("Yusif", callback);

// let first = numbers.find((value) => value > 6);

// console.log(first);

// for (const n of numbers) {
//   console.log(n);
// }

// numbers.forEach((n) => console.log(n));

// const mapNumbers = numbers.map(square);

// function square(value) {
//   return value * 2;
// }

// console.log(mapNumbers);
const numbers = [4, 4, 3, 2];

// let reduced = numbers.reduce((a, b) => a + b);

// console.log(reduced);

// const myArr = Array.from("ABCDEFG");

// console.log(myArr);

// let filteredNumbers = numbers.filter(filterArr);

// function filterArr(num) {
//   return num > 10;
// }

// console.log(filteredNumbers);

const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");

console.log(months);
console.log(myMonths);
