# this

```js
const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};

console.log(test.func()); // 42
```

## reference

- [mdn - this](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this)
- [What is 'this'](https://www.youtube.com/watch?v=kb0Af7dzCTs)
