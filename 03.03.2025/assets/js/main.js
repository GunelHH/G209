// function test() {
//   let succeded = false;
//   var dfd = $.Deferred();
//   if (succeded) {
//     console.log(dfd.done(alert("done")));
//   } else {
//     console.log(dfd.fail(alert("fail")));
//     dfd.notify(alert("notify"));
//   }

//   dfd.always(() => {
//     alert("Always");
//   });
// }

// test();

// const fetchRequest = $.ajax({
//   type: "GET",
//   url: "https://dsdsds",
//   dataType: "txt",
//   //   data:""
//   success: function (element) {
//     setTimeout(() => {
//       const $user = $("#user");

//       $user.html(element.username);
//     }, 1000);
//   },
//   error: function (err) {
//     console.error(err);
//   },
// });

// fetchRequest.fail(alert("fail"));

// var myObject = {
//   a: {
//     one: 1,
//     two: 2,
//     three: 3,
//   },
//   b: [1, 2, 3],
// };
// var recursiveEncoded = $.param(myObject);
// var recursiveDecoded = decodeURIComponent($.param(myObject));

// alert(recursiveEncoded);
// alert(recursiveDecoded);
