import React, {Component} from 'react';
import Api from '../utils/api';
import queryString from 'query-string';
import WeatherImage from './WeatherImage';

class FiveDayWeatherForecast extends Component {
	// cityname will hold the returned city name from the API, this might be different from the userinput. Cityweather data is array of return data from API.
	constructor(props) {
		super(props);
			this.state = {
			cityname: '',
			cityweatherdata: []
		};
		// handleRoute progrmatically renders the weather details page.
		this.handleRoute = this.handleRoute.bind(this);
	}

	returnData(city) {
		// Call to the API and sets state
		Api.fetchWeatherData(city)
		.then(weather => {
			this.setState({
				cityname: weather.cityName,
				cityweatherdata: weather.weatherData
			});
		});
	} 
	// use compondentDidMount to make API call once component is created as a DOM element.
	componentDidMount() {
		// Passes in userinput from the query string into the returnData to make API call. 
		let cityForApi = queryString.parse(this.props.location.search);
		this.returnData(cityForApi.city);
	}

	handleRoute(event) {
		// programmtically add pathway to history object and add in the search (city) to the url from the previous route. history.push takes the path as first argument and an optional location.state as the second parameter.
		event.city = this.state.cityname;
		let locationState = this.props.location.state = event;
		this.props.history.push(`/details${this.props.location.search}`, locationState);
	}

	render() {
		// create an array of images with the image rendering from the api's icon property.
		const weatherImages = this.state.cityweatherdata.map((image, i) => {
			return (
				<WeatherImage
					handleRoute={this.handleRoute.bind(null, image)}
					key={image+i}
					data= {image}
					dateIncrementor= {i}	                    
				/>
			);
		});    
		return (
			<div>
				<div className="App-header">
					<header>
						<h2>{this.state.cityname}</h2>
					</header>
				</div>		
				<div className='container'>
					<div className='d-flex flex-wrap justify-content-around image-group-wrapper'>
						{weatherImages}	          
					</div>
				</div>
			</div>
		);
	}
}

export default FiveDayWeatherForecast;