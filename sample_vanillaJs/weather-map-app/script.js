//* meta weather api
//! fetch error 'no-cors' mode issue
//! https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors

//! front-end js의 cors(교차 출처 요청)에서 발생하는 일은
//! browser가 기본적으로 출처 간 resource access에서 front-end code 차단
//! Access-Control-Allow-Origin응답에있는 경우 브라우저는 차단을 완화하고 코드가 응답에 access 할 수 있도록 허용
//! Access-Control-Allow-Origin에서 응답을 보내지 않으면 front-end code가 해당 사이트의 응답에 직접 access 할 수 없습니다
//! 'no-cors' mode는 이러한 상황에서 front-end가 응답 콘텐츠에 access할수없음을 보장합니다.

//! 그러나 'no-cors' mode 는 browser에 모든 상황에서 응답 본문과
//! header의 내용을 보지 못하도록 front - end js code를 차단하기 때문에 좋은 대안이 아니다.

//! free to use CORS Proxies
//! const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
//! const proxyUrl = 'https://api.allorigins.win/raw?url=';

// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const proxyUrl = 'https://api.allorigins.win/raw?url=';
const targetUrl = 'https://www.metaweather.com/api/location/';

const APIUrlQuery = (location) => {
	return `${proxyUrl}${targetUrl}search/?query=${location}`;
};

const APIUrlLatLng = (lat, long) => {
	return `${proxyUrl}${targetUrl}search/?lattlong=${lat},${long}`;
};

const APIUrlLocation = (location) => {
	return `${proxyUrl}${targetUrl}${location.woeid}`;
};

const getWeatherByLocation = async (location) => {
	const local = await fetch(APIUrlLocation(location));
	const localData = await local.json();

	const result = localData.latt_long.split(',');
	result.push(localData.consolidated_weather[0].weather_state_name);

	return result;
};

const getWoeIdByClick = async (lat, lng) => {
	const resp = await fetch(APIUrlLatLng(lat, lng));
	const respData = await resp.json();

	// 근처 10개씩

	const vicinity = respData.filter((data) => {
		return data.distance <= 30000;
	});

	if (vicinity.length !== 0) {
		return getWeatherByLocation(vicinity[0]);
		// city위치에 mark 날씨에 따른 icon변화. => mark 클릭시 사라짐
	} else {
		return getWeatherByLocation(respData[0]);
	}
};

//* google map api
let map;
let markers = [];

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 36.5705, lng: 127.8935 },
		zoom: 8,
	});

	map.addListener('click', async (e) => {
		const latData = JSON.stringify(e.latLng);
		const { lat, lng } = JSON.parse(latData);
		const pinPoint = await getWoeIdByClick(lat, lng);

		addMarker(pinPoint);
	});
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
	for (let i = 0; i < markers.length; i++) {
		markers[i].setMap(map);
	}
}

function clearMarkers() {
	setMapOnAll(null);
}

function addMarker(location) {
	clearMarkers();
	markers = [];
	let weather;

	switch (location[2]) {
		case 'Snow':
			weather = 'sn';
			break;
		case 'Sleet':
			weather = 'sl';
			break;
		case 'Hail':
			weather = 'h';
			break;
		case 'Thunderstorm':
			weather = 't';
			break;
		case 'Heavy Rain':
			weather = 'hr';
			break;
		case 'Light Rain':
			weather = 'lr';
			break;
		case 'Showers':
			weather = 's';
			break;
		case 'Heavy Cloud':
			weather = 'hc';
			break;
		case 'Light Cloud':
			weather = 'lc';
			break;
		case 'Clear':
			weather = 'c';
			break;
	}

	const image = `https://www.metaweather.com//static/img/weather/png/64/${weather}.png`;

	const marker = new google.maps.Marker({
		position: { lat: Number(location[0]), lng: Number(location[1]) },
		map: map,
		icon: image,
	});
	markers.push(marker);
}

// const form = document.getElementById('form');
// const search = document.getElementById('search');

// form.addEventListener('submit', (e) => {
// 	e.preventDefault();

// 	const location = search.value;

// 	console.log('location : ' + location);

// 	if (location) {
// 		getWoeIdBySearch(location);
// 		search.value = '';
// 	}
// });
