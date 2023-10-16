const people = [
  {
    name: 'john',
    age: 29,
  },
  {
    name: 'sara',
    age: 24,
  },
  {
    name: 'make',
  },
];

let count = 0;

people.forEach((person) => {
  person.age?.[count++];
  console.log(count);
});

const employee = {
  salary: 4000,
  getTime: function () {
    console.log(Date());
  },
};

employee?.getTime?.();
