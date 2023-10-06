//? Array.find()

//? testing function을 만족하는 첫번째 요소를 return
//? 만족하는요소가 없으면 unfefined return

const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
];

const foundItem = items.find((item) => item.name === 'Book');

console.log(foundItem); // { name: 'Book', price: 5 }
