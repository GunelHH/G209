// localStorage.clear();

// function getLocal() {
//   let lcStorage = localStorage.getItem("Test");

//   localStorage.setItem("Test", "Test value");

//   console.log(lcStorage);
// }
// function getSession() {
//   let sStorage = sessionStorage.getItem("sesionKey");

//   console.log(sStorage);

//   sessionStorage.setItem("sesionKey", "sesionValue");
//   sessionStorage.setItem("sesionKey1", "sesionValue");
// }

// getLocal();

// getSession();

// sessionStorage.removeItem("sesionKey");

// sessionStorage.clear();

// function setCookie(cname, cvalue, exdays) {
//   const d = new Date();
//   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
//   let expires = "expires=" + d.toUTCString();
//   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// setCookie("test", "testCookie", new Date("14.02.2025"));

// special characters (spaces) need

// function setCookie(cname, cvalue, exdays) {
//   const d = new Date();
//   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
//   let expires = "expires=" + d.toUTCString();
//   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// function getCookie(cname) {
//   let name = cname + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let ca = decodedCookie.split(";");
//   for (let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == " ") {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }

// function checkCookie() {
//   let user = getCookie("username");
//   if (user != "") {
//     alert("Welcome again " + user);
//   } else {
//     user = prompt("Please enter your name:", "");
//     if (user != "" && user != null) {
//       setCookie("username", user, 30);
//     }
//   }
// }

// checkCookie();

// function setCookie(cname, cvalue, exdays) {
//   const d = new Date();
//   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000); // Set expiration
//   let expires = "expires=" + d.toUTCString();
//   document.cookie = `${cname}=${cvalue}; ${expires}; path=/; SameSite=Lax`;
// }

// function getCookie(cname) {
//   let name = cname + "=";
//   let ca = document.cookie.split(";");
//   for (let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == " ") {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }

// function checkCookie() {
//   let user = getCookie("username");
//   if (user != "") {
//     alert("Welcome again " + user);
//   } else {
//     user = prompt("Please enter your name:", "");
//     if (user != "" && user != null) {
//       setCookie("username", user, 365);
//     }
//   }
// }
console.log(navigator);

document.cookie =
  "firstName=name; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";

console.log(document.cookie.at(0));
