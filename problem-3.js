// Problem-3: Factorial of a Number

// Without function
// let number = 5;
// let result = 1;
// for (let i = 1; i <= number; i++) {
//   result = result * i;
// }
// console.log(result);

// With function
function getFactrial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }
  return result;
}
// console.log(getFactrial(3));

// let factorialOfFour = getFactrial(4);
// console.log(factorialOfFour);
