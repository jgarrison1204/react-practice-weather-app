import Axios from 'axios';	
const weatherApi = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
const apiKey = '&cnt=5&units=imperial&APPID=63657c7a59c6a9ed5a8e870e4c69a754';

function getWeatherDescription(city) {
	let getLink = weatherApi + city + apiKey;
	return Axios.get(getLink)
		.then(response => {
		return response.data.list.map(data => {
			let weather = data.weather;
			let temp = data.temp;
			return {
				date: data.dt,
				humidity: data.humidity,
				icon: weather[0].icon,
				description: weather[0].description,
				day: temp.day,
				maxtemp: temp.max,
				mintemp: temp.min		
			};
		});
	});
}

function getCityNameFromApi(city) {
	let getLink = weatherApi + city + apiKey;
	return Axios.get(getLink)
	.then(response => {
		return response.data.city.name;
	});
}

const apiCall = {
	fetchWeatherData(city) {	
		return Axios.all([
			getWeatherDescription(city),
			getCityNameFromApi(city)
		])
		.then(response => {
			 return {
				weatherData: response[0],
				cityName: response[1]
			 };
		})
		.catch(error => {
			console.log(error);
		});
	}
};

export default apiCall;

