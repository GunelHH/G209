// let num1 = 10;
// let num2 = num1;
// num2 = 20;

// console.log(num2);

// let obj1 = { name: "Ilaha" };
// let obj2 = obj1;
// obj2.name = "Zamir";

// console.log(obj1.name);

// let person = {
//   name: "James",
//   age: 23,
//   isMale: true,
// };
// console.log(person);

// let newPerson = person;
// newPerson.isMale = false;
// console.log(person);

// let obj = new Map();

// obj.set("first", "Yusif");
// obj.set(1, "Yusif");
// obj.set(1, "Zamir");

// // console.log(obj.get(1));

// console.log(obj);

// obj.forEach((n) => {
//   console.log(n);
// });
// let obj = new Set();

// obj.add(2);
// obj.add("hello");

// console.log(obj.has(1));
// Task Example
function modifyValues(primitive, object) {
  console.log("Before:", primitive, object);
  object.value = 100; // Modify the reference type
  console.log("Inside:", primitive, object);
}

const num = 42; // Primitive
const obj = { value: 50 }; // Reference type

modifyValues(num, obj);
console.log("After:", num, obj);
