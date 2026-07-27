// Problem-13: Loop Through on Object's Properties

let monitor = {
  color: "Black",
  brand: "LG",
  display: "Something",
  size: "Something",
};

// console.log(monitor["color"]); // bracket notation
// console.log(monitor.brand); // dot notation

// For in loop
// for (let key in monitor) {
//   //   console.log(key, ": ", monitor[key]);
// }

// Using keys method
let objKeys = Object.keys(monitor);
// console.log(objKeys);

// Foor loop method
// for (let i = 0; i < objKeys.length; i++) {
//   let key = objKeys[i];
//   //   console.log(key);

// //   console.log(key, ":", monitor[key]);
// }

// Foor of method
for (let key of objKeys) {
  console.log(key, monitor[key]);
}
