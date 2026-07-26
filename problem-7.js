// Problem-7: Check if a String is a Palindrome

// let str = "madam";

// Without function
// let reverseStr = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   let letter = str[i];
//   reverseStr = reverseStr + letter;
//   //   console.log("i--> ", i, str);
// }
// console.log(reverseStr);

// if (str === reverseStr) {
//   console.log("Palindrome");
// } else {
//   console.log("Not Palindrome");
// }

// With function
function isPalindrome(str) {
  let reverseStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    let letter = str[i];
    reverseStr = reverseStr + letter;
    //   console.log("i--> ", i, str);
  }
  //   console.log(reverseStr);

  if (str === reverseStr) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("deed"));
