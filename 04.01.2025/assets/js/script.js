// if (6 != 6) {
//   console.log("Not Equals");
// } else if (7 != 7) {
//   console.log("not equals");
// } else if (5 != 5) {
//   console.log("equals");
// } else {
//   console.log("Not a number");
// }

// let arr = [2, 3, 4, 1, 6, 5];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let i = 1; i <= 1000; i++) {
//   console.log(i);
// }

// let person = {
//   name: "Yusif",
//   surname: "Gazibayov",
//   age: 17,
// };

// let text = "";
// for (let v in person) {
//   text += person[v] + " ";
// }
// console.log(text);

const strArr = ["Yusif", "Zamir", "Ilaha", "Laman"];

let text = "";

for (let item of strArr) {
  text += item + " ";
}
console.log(text);

let number = 5;

if (number % 2 == 0) {
  console.log("Odd");
} else {
  console.log("Even");
}

for (let i = 0; i < 100; i++) {}

const person = {
  name: "Laman",
  surname: "Jalilli",
};
const BMW = {
  Brand: "BMW",
  Marka: "M5",
};
const Jeep = {
  Brand: "Jeep",
  Marka: "M-25",
};

console.log(BMW.Marka);

for (let keyObj in person) {
}
const cars = ["BMW", "Mercedes", "Opel"];

for (let car of cars) {
}
