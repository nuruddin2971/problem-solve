// Problem-10: Find the Smallest Number in an Array

function smallestNumerFromArray(arr) {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];
    if (currentElement < smallest) {
      smallest = currentElement;
    }
    //   console.log(currentElement);
  }
  return smallest;
}
console.log(smallestNumerFromArray([250, 20, 4, 5, 64, 560]));
