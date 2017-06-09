import React, {Component} from 'react';
import Api from '../utils/api';
import queryString from 'query-string';
import WeatherImage from './WeatherImage';

class FiveDayWeatherForecast extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			cityweatherdata: []
		}
	}

	returnData(city) {
        Api.fetchWeatherData(city)
        .then(weather => {
            this.setState({
                cityweatherdata: weather
            })
        });
    }
	// use compondentDidMount to make API call once component is created as a DOM element.
	componentDidMount() {
		let cityForApi = queryString.parse(this.props.location.search);
		this.returnData(cityForApi.city);
	}

	render() {
        // create an array of images with the image rendering from the api's icon property.
        const weatherImages = this.state.cityweatherdata.map((image, i) => {
            // webpack you need to use require(..path) to have images render from the server in localhost.
            return (
                <WeatherImage
                    key= {image + i}
                    icon= {image}
                    dateIncrementor= {i}
                />
            )
        });
		return (
			<div className='row'>
	            {weatherImages}
            </div>
        )
	}
}

export default FiveDayWeatherForecast;