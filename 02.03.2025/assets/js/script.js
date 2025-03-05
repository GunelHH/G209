// const alertName = function (name) {
//   console.log("Hello from alert name function to" + " " + name);
// };

// const getValue = function (value) {
//   console.log(`Value is ${value}`);
// };
// const getValue1 = function (value) {
//   console.log(`get value 1 is ${value}`);
// };
// const fireWithFunc = function (val1, val2) {
//   console.log(`fire with ${val1}, ${val2}`);
// };

// let callBacks = $.Callbacks();

// callBacks.add(alertName);

// callBacks.fire("Zamir");

// callBacks.add(getValue);

// callBacks.fire("Test value");

// callBacks.remove(alertName);

// callBacks.fire("After removing");

// callBacks.lock();

// callBacks = $.Callbacks("memory");

// callBacks.fire("After lock");

// callBacks.add(getValue1);

// console.log(callBacks.has(getValue1));

// callBacks.fire("one");

// callBacks.add(fireWithFunc);

// callBacks.fireWith(window, ["value1", "value2"]);

// console.log(callBacks.fired());

// callBacks.empty();

// console.log(callBacks.has(alertName));
// console.log(callBacks.has(getValue));

// console.log(callBacks.disabled());

// callBacks.disable();

// callBacks.fire("after disable");
// console.log(callBacks.disabled());

// jQuery.noConflict();
// Do something with jQuery
// jQuery("div p").hide();
// Do something with another library's $()

function asyncEvent() {
  var dfd = jQuery.Deferred();

  // Resolve after a random interval
  setTimeout(function () {
    dfd.resolve("hurray");
  }, Math.floor(400 + Math.random() * 2000));

  // Reject after a random interval
  setTimeout(function () {
    dfd.reject("sorry");
  }, Math.floor(400 + Math.random() * 2000));

  // Show a "working..." message every half-second
  setTimeout(function working() {
    if (dfd.state() === "pending") {
      dfd.notify("working... ");
      setTimeout(working, 500);
    }
  }, 1);

  // Return the Promise so caller can't change the Deferred
  return dfd.promise();
}

// Attach a done, fail, and progress handler for the asyncEvent
$.when(asyncEvent()).then(
  function (status) {
    alert(status + ", things are going well");
  },
  function (status) {
    alert(status + ", you fail this time");
  },
  function (status) {
    $("body").append(status);
  }
);
