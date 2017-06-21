import React, {Component} from 'react';
import Api from '../utils/api';
import {Link} from 'react-router-dom';
import queryString from 'query-string';
import WeatherImage from './WeatherImage';
import WeatherDetail from './WeatherDetail';

class FiveDayWeatherForecast extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			cityname: '',
			cityweatherdata: []
		}
		this.handleRoute = this.handleRoute.bind(this);
	}

	returnData(city) {
        Api.fetchWeatherData(city)
        .then(weather => {
            this.setState({
            	cityname: weather.cityName,
                cityweatherdata: weather.weatherData
            })
        });
    }
	// use compondentDidMount to make API call once component is created as a DOM element.
	componentDidMount() {
		let cityForApi = queryString.parse(this.props.location.search);
		this.returnData(cityForApi.city);
	}

	handleRoute(event) {
		// programmtically add pathway to history object and add in the search (city) to the url from the previous route.
		this.props.history.push(`/details${this.props.location.search}`);
	}

	render() {
        // create an array of images with the image rendering from the api's icon property.
        const weatherImages = this.state.cityweatherdata.map((image, i) => {
            // webpack you need to use require(..path) to have images render from the server in localhost.
            return (
                <WeatherImage
                	handleRoute={this.handleRoute.bind(null, image)}
    				key={image+i}
                    data= {image}
                    dateIncrementor= {i}	                    
                />
           )
        });
		return (
			<div>
				<header 
					style={
						{
							textAlign:'center',
							marginTop: '3%'
						}
					}>
					<h2>{this.state.cityname}</h2>
				</header>
				<div className='row'>
					{weatherImages}	          
            	</div>
			</div>
        )
	}
}

export default FiveDayWeatherForecast;