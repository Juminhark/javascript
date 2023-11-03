//? String.prototype.match()

//? str.match(regexp)

//? 0.120850.js

let my_string = 'hi12392';

let reg = new RegExp(/[0-9]/, 'g');

console.log(my_string.match(reg)); // ["1","2","3","9","2"]
