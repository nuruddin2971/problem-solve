// Problem-9: Find the Largest Number in an Array

// let arr = [500, 120, 20, 5010, 1220];

// Without function
// let largest = [0];
// for (let i = 1; i < arr.length; i++) {
//   let currentElement = arr[i];
//   if (currentElement > largest) {
//     largest = currentElement;
//   }
//   //   console.log(currentElement);
// }
// console.log(largest);

// With function
function largestNumerFromArray(arr) {
  let largest = [0];
  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];
    if (currentElement > largest) {
      largest = currentElement;
    }
    //   console.log(currentElement);
  }
  return largest;
}
console.log(largestNumerFromArray([250, 20, 4, 5, 64, 560]));
