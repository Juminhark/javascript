//? filter()

//? 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환

const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];

const result = words.filter((word) => word.length > 6);

console.log(result); // [ 'exuberant', 'destruction', 'present' ]

const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
];

const filteredItems = items.filter((item) => item.price <= 100);

console.log(filteredItems);
/* 
[
   { name: 'Bike', price: 100 },
   { name: 'Album', price: 10 },
   { name: 'Book', price: 5 },
   { name: 'Keyboard', price: 25 }
 ] 
 */
