// Problem-8: Count Words in a Sentence

// Without function
// let str = "programming hero is a habi jabi school";

// let strSplitArr = str.split(" ");
// console.log(strSplitArr.length);

// With function
function wordCount(str) {
  let strSplitArr = str.split(" ");
  return strSplitArr.length;
}
// let result = wordCount("programming hero is a habi jabi school");
// console.log(result);

console.log(wordCount("programming hero is a habi jabi"));
