const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

console.log(materials.map((material) => material.length)); // [ 8, 6, 7, 9 ]

//! arrow function : this
materials.forEach(
  (v, i) => {
    console.log(v, i, this);
  },
  [1, 2]
);
materials.forEach(
  function (v, i) {
    console.log(v, i, this);
  },
  [1, 2]
);
