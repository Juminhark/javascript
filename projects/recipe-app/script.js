// html div id로 해당 구역 탐색후 object화
const meals = document.getElementById('meals');
const favoriteContainer = document.getElementById('fav-meals');

const getRandomMeal = async () => {
	const resp = await fetch(
		'https://www.themealdb.com/api/json/v1/1/random.php'
	);

	const respData = await resp.json();
	const randomMeal = respData.meals[0];
	console.log(randomMeal);

	addMeal(randomMeal, true); // 아래칸에 추가
};

const addMeal = (mealData, random = false) => {
	const meal = document.createElement('div');
	meal.classList.add('meal');

	meal.innerHTML = `			
			<div class="meal-header">
			${random ? '<span class="random"> Random Recipe </span>' : ''}
				<img
					src=${mealData.strMealThumb}
					alt=${mealData.strMeal}
				/>
			</div>
			<div class="meal-body">
				<h4>${mealData.strMeal}</h4>
				<button class="fav-btn">
					<i class="fas fa-heart"></i>
				</button>
			</div>
	`;

	const btn = meal.querySelector('.meal-body .fav-btn');

	btn.addEventListener('click', () => {
		if (btn.classList.contains('active')) {
			removeMealLS(mealData.idMeal);
			btn.classList.remove('active');
		} else {
			addMealLS(mealData.idMeal);
			btn.classList.add('active');
		}
	});

	meals.appendChild(meal);
};

getRandomMeal();

const addMealLS = (mealId) => {
	const mealIds = getMealsLS();

	localStorage.setItem('mealIds', JSON.stringify([...mealIds, mealId]));
};

const removeMealLS = (mealId) => {
	const mealIds = getMealsLS();

	localStorage.setItem(
		'mealIds',
		JSON.stringify(mealIds.filter((id) => id !== mealId))
	);
};

const getMealsLS = () => {
	const mealIds = JSON.parse(localStorage.getItem('mealIds'));

	return mealIds === null ? [] : mealIds;
};

const getMealById = async (id) => {
	const resp = await fetch(
		`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
	);

	const respData = await resp.json();

	const meal = respData.meals[0];
	return meal;
};

const getMealBySearch = async (term) => {
	const meals = await fetch(
		`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
	);
};

const addMealToFav = (mealData) => {
	const favMeal = document.createElement('li');

	favMeal.innerHTML = `			
				<img
					src=${mealData.strMealThumb}
					alt=${mealData.strMeal}
				/>
			<span>${mealData.strMeal}</span>	
	`;

	favoriteContainer.appendChild(favMeal);
};

const fetchFavMeals = async () => {
	const mealIds = getMealsLS();

	for (let i = 0; i < mealIds.length; i++) {
		const mealId = mealIds[i];

		meal = await getMealById(mealId);
		addMealToFav(meal);
	}
};

fetchFavMeals();
