// Problem-2: Sum of a Range of Numbers (1 to N)

// 7 =  1 + 2 + 3 + 4 + 5 + 6 + 7 = 28

// Without function
// let number = 7;
// let sum = 0;
// for (let i = 1; i <= number; i++) {
//   console.log(i);
//   sum = sum + i;
// }
// console.log(sum);

// With function
function sumRang(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(sumRang(100))
