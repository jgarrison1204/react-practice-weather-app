import Axios from 'axios';
const apiKey = '63657c7a59c6a9ed5a8e870e4c69a754'

function getWeatherDescription(weatherdata) {
    return weatherdata.map(data => {
        return data.weather[0].icon;
    });
}

const apiCall = {
	fetchWeatherData(city) {	
	const fetchWeatherData = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=5&units=imperial&APPID=${apiKey}`;
		return Axios.get(fetchWeatherData)
			.then(response => {
				return getWeatherDescription(response.data.list);
			})
			.catch(error => {
				console.log(error)
			});
	}
}

export default apiCall;

