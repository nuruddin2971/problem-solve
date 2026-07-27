// Problem-14: You are given an object containing information about a student

const student = {
  name: "Utsho",
  age: 26,
  university: "DIU",
  department: "CSE",
};

function objOperation(obj) {
  for (let key in obj) {
    console.log(key);
  }

  for (let key in obj) {
    console.log(obj[key]);
  }

  for (let key in obj) {
    console.log(key, ": ", obj[key]);
  }

  let objKeyCount = Object.keys(obj).length;
  console.log("Total Properties:", objKeyCount);

  let hasEmailProperty = obj.hasOwnProperty("email");
  console.log("Has Email:", hasEmailProperty);
}

objOperation(student);
