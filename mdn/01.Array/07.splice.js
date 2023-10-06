//? Array.prototype.splice()

//? 배열의 요소를 제거하거나 대체 또는 새로운 요소를 더한다
//배열 요소 삭제, 교체, 새 요소 추가

//? splice(start)
//? splice(start, deleteCount)
//? splice(start, deleteCount, item1)
//? splice(start, deleteCount, item1, item2)

const months = ['Jan', 'March', 'April', 'June'];

//? 추가
months.splice(1, 0, 'Feb');
console.log(months); // [ 'Jan', 'Feb', 'March', 'April', 'June' ]

//? 제거
months.splice(3, 1);
console.log(months); // [ 'Jan', 'Feb', 'March', 'June' ]
