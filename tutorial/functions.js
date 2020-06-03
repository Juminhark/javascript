function greet({ name }, text) {
  console.log(`welcome to our website ${name} ` + text);
}

console.log("rest of the code");

function signUp() {
  let name = prompt("what is your name");
  greet({ name }, "random text");
}

signUp();

let maxNr = Math.max(1, 6);

console.log(maxNr);

function max(nr1 = 0, nr2 = 0) {
  if (nr1 > nr2) {
    console.log(nr1);
    return nr1;
  } else if (nr1 === nr2) {
    console.log(same);
    return nr1;
  } else {
    console.log(nr2);
    return nr2;
  }
}
let inbox = max(1, 5);

console.log("result : " + inbox);
