// Problem-6: Count Vowels in a String

// let str = "Mohammad";

// let vowels = "aeiou";
// console.log(vowels.includes("h"))

// let count = 0;

// for (let i = 0; i < str.length; i++) {
//   let letter = str[i];
//   console.log("i, -> letter ->>> ", i, letter);
//   if (vowels.includes(letter)) {
//     console.log("Vowel");
//     count++;
//   }
// }
// console.log("count->>", count);

function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}
let phVowelCount = countVowels("programming-hero");
console.log(phVowelCount);
