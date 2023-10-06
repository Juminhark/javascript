
- Math.sqrt()

```js
// 인수분해
for(let i = 1; i < Math.sqrt(b); i++){
    if( b % i  === 0) {
        bb.push(i)
        bb.push( b / i)
    }
}
console.log(bb)

```