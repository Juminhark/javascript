var object = new Object();
object.firstName = 'John';
console.log(typeof object);

object = null;
console.log(typeof object);

var typenull = null;
console.log(typeof typenull);
/* type이 object로 보이는 이유
담긴 값이 어떤타입을 결정하는 코드는
1. indifine
*/
var undifined;
console.log(typeof undifined);

var a = 1;
console.log(typeof a);

var b = '';
console.log(typeof b);

var c = true;
console.log(typeof c);
