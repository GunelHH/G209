// function getAjax() {
//   const ajaxRequest = new XMLHttpRequest();

//   ajaxRequest.onload = () => {
//     document.body.innerHTML = ajaxRequest.responseText;
//   };

//   ajaxRequest.open("GET", "https://jsonplaceholder.typicode.com/users/1");

//   ajaxRequest.send();
//   //   ajaxRequest.abort();
// }

// const tbody = document.getElementById("tbody");

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((x) => x.json())
//   .then((x) =>
//     x.forEach((e) => {
//       const tr = document.createElement("tr");
//       const td1 = document.createElement("td");
//       const td2 = document.createElement("td");
//       td1.textContent = e.name;
//       td2.textContent = e.username;

//       tr.appendChild(td1);
//       tr.appendChild(td2);

//       tbody.appendChild(tr);
//     })
//   )
//   .catch((e) => console.error(e.message))
//   .finally(console.log("finally"));

const $span = $("span");

// $("ul li").on("click", alert("hello"));

$span.addClass("myClass secondClass");

$span.removeClass("secondClass");
console.log($("#text").attr("id"));
