//? 8. IIFE(Immediately-Invoked Function Expressions)

const openUsers = ['Nicolas', 'Lynn', 'Steven', 'Autumn'];
console.log(openUsers);

//* Browser
//* openUsers[0] = 'Change'

//* client가 variable에 접근이 가능하다. : data 변경도 가능. : not private
//* 이러한것을 방지하기 위한것이 IIFE

(function () {
	const secretUsers = ['Nicolas', 'Lynn', 'Steven', 'Autumn'];
	console.log(secretUsers);
})();
// console.log(secretUsers); //! browser에서 존재하지않는다.
