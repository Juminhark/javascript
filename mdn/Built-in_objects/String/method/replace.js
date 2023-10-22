//? String.prototype.replace()

//? 패턴이 일치하는 일부 또는 모든 부분이 교체된 `새로운 문자열` 반환
//? 패턴은 문자열이나 정규식(RegExp)이 될수 있다
//? 패턴이 문자열 인 경우, 첫번쨰 문자열만 치환이 된다

const p = 'your dog loves you';

console.log(p.replace('dog', 'cat')); // your cat loves you

const regex = /you/g;
console.log(p.replace(regex, 'i')); // ir dog loves i
