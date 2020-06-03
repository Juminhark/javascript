// == Equal to
// 5 == 5 true
// 5 == 4 false

// Not equal
// 4 != 3 true
// 4 != 4 false

// 5 > 10 false
// 10 > 6 true
// 10 >= 10 true
// 20 <= 20 true

// 10 == "10" true
// 10 === "10" false

// never ever use double equals
// use the triple

const access = true;
const age = 20;

if (access && age >= 18) {
  console.log("hi");
} else {
  console.log("dont have access");
}

// && and
// || or

// false , 0 , ""

const name = "";

if (name) {
  console.log("value truthy");
} else {
  console.log("value falsey");
}
