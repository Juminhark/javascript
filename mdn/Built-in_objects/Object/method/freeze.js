// Object.freeze()

const obj = {
  prop: 42,
};

// object muttable
obj.prop = 41;
console.log(obj);

// make immutable
Object.freeze(obj);

obj.prop = 33; // Throws an error in strict mode
console.log(obj);
