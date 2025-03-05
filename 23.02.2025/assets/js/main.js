// const result = new Promise((resolve, reject) => {
//   try {
//     const a = "test";
//     a = "tttest";

//     resolve("Success");
//   } catch (e) {
//     reject(e.message);
//   }
// });

// result
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//Promise.All

// const promise1 = Promise.resolve(3);
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "foo");
// });
// const promise2 = 42;

// Promise.all([promise1, promise2, promise3]).then((datas) => {
//   console.log(datas);
// });

//Promise.allSettled

// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(reject, 100, "foo")
// );
// const promises = [promise1, promise2];

// Promise.allSettled(promises).then((results) =>
//   results.forEach((result) => console.log(result))
// );

//Promise.Any

// const promise1 = Promise.resolve(0);
// const promise2 = new Promise((resolve) => setTimeout(resolve, 1000, "quick"));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

// const promises = [promise1, promise2, promise3];

// Promise.any(promises).then((value) => console.log(value));

//Promise.race

// const a = new Promise((_, reject) => setTimeout(reject, 100, new Error("a")));
// const b = new Promise((resolve) => setTimeout(resolve, 200, "b"));

// Promise.race([a, b]).then(
//   (value) => {
//     console.log(`race: fulfilled with ${value}`);
//   },
//   (reason) => {
//     console.log(`race: rejected with ${reason.message}`);
//   }
// );

// Promise.any([a, b]).then(
//   (value) => {
//     console.log(`any:  fulfilled with ${value}`);
//   },
//   (reason) => {
//     console.log(
//       `any:  rejected with ${reason.errors
//         .map(({ message }) => message)
//         .join()}`
//     );
//   }
// );

//Async Await
// const promise1 = new Promise((res, rej) => {
//   setTimeout(res, 200, "Success from promise 1");
// });

// const promise2 = new Promise((res, rej) => {
//   setTimeout(res, 100, "Success from promise 2");
// });

// async function callPromise1() {
//   await promise1.then((data) => {
//     console.log(data);
//   });
// }
// function callPromise2() {
//   promise2.then((data) => {
//     console.log(data);
//   });
// }

// await callPromise1();
// callPromise2();
