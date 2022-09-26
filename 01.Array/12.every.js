//? Array.every()

//? 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트
//? Boolean값을 return

const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
];

const hasInexpensiveItems = items.every((item) => item.price <= 1000);

console.log(hasInexpensiveItems); // true
