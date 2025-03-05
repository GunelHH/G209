// const containers = document.querySelectorAll(".container");
// const imageDiv = document.querySelectorAll(".imageDiv > #item");

// let draggedItem = null;

// imageDiv.forEach((element) => {
//   element.addEventListener("dragstart", (e) => {
//     draggedItem = e.target;
//     e.dataTransfer.effectAllowed = "move";
//   });

//   //   element.addEventListener("dragend", () => {
//   //     draggedItem = null; // Clear dragged item on drag end
//   //   });
// });

// containers.forEach((element) => {
//   element.addEventListener("dragover", (e) => {
//     e.preventDefault();
//   });

//   element.addEventListener("dragenter", (e) => {
//     e.preventDefault();
//   });

//   element.addEventListener("drop", (e) => {
//     e.preventDefault();
//     if (draggedItem) {
//       e.target.appendChild(draggedItem);
//     }
//   });
// });

// let userObj = {
//   name: "Sammy",
//   email: "sammy@example.com",
//   plan: "Pro",
//   test: 11,
// };

// let userStrSpace = JSON.stringify(userObj, null);

// console.log(userStrSpace);

// let toObj = JSON.parse(userStrSpace);

// console.log(toObj);

// const numArr = [
//   [1, 2],
//   ["test", 2],
// ];

// console.log(numArr);

// let convertToJson = JSON.stringify(numArr);

// console.log(convertToJson);

// let convertToObj = JSON.parse(convertToJson);

// console.log(convertToObj);
