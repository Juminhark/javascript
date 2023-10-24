// 생성자
let re = /ab+c/;
re = new RegExp('ab+c');

// ^ : 입력의 시작부분을 대응
re = /^A/;

let t = 'An E';
re.test(t); // true : A 와 대응
t = 'an A';
re.test(t); // false

// $ : 입력의 끝부분과 대응
re = /t$/;

t = 'eater';
re.test(t); // false
t = 'eat';
re.test(t); // true : t와 대응

//  * : 앞의 표현식의 0번 이상 반복되는 부분과 대응
re = /bo*/;

t = 'A ghost booooed';
re.test(t); // true : boooo 와 대응
t = 'A bird warbled';
re.test(t); // true : b 와 대응
t = 'A goat grunted';
re.test(t); // false

// + : 앞의 표현식의 1번 이상 반복되는 부분과 대응
re = /a+/;

t = 'candy';
re.test(t); // true : a 와 대응
t = 'caaaaaaandy';
re.test(t); // true : 모든 a 와 대응
t = 'cndy';
re.test(t); // false

// D : 숫자 아님
// + : 하나 이상
re = /\D+/g;

t = 'aAb1B2cC34oOp';
console.log(t.match(re));
