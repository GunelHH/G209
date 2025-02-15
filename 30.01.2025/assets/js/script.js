// "use strict";

// function test(a, a) {
//   console.log(a + a);
// }

// test(3, 5);

// function Greeting() {
//   "use strict";
//   x = 5;
//   console.log(x);
// }
// y = 6;

// console.log(y);
// Greeting();

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const member = {
//   firstName: "Hege",
//   lastName: "Nilsen",
// };

// let fullName1 = person.fullName(member);
// let fullName = person.fullName.bind(member);

// console.log(fullName1);
// console.log(fullName());
// let nameObj = {
//   name: "Tony",
// };

// let PrintName = {
//   name: "steve",
//   sayHi: function (...age) {
//     console.log(this.name + " age is " + age);
//   },
// };

// PrintName.sayHi.call(nameObj, 42, 55, 22, 22);

// let nameObj = {
//   name: "Tony",
// };

// let PrintName = {
//   name: "steve",
//   sayHi: function (...age) {
//     console.log(this.name + " age is " + age);
//   },
// };

// PrintName.sayHi.apply(nameObj, [42, 55]);

let x = document.querySelectorAll("#fname");
function myFunction() {
  x.forEach((i) => {
    i.value = i.value.toLowerCase();
  });
}

function focusFunction() {
  x.forEach((i) => {
    i.value = i.value.toUpperCase();
  });
}

function keyPress() {
  let input = document.getElementById("input");

  input.onkeydown = () => {
    console.log("Pressed down");
  };
}

keyPress();
