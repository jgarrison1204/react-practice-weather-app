import React, {Component} from 'react';
import Api from '../utils/api';
import {Link} from 'react-router-dom';
import queryString from 'query-string';
import WeatherImage from './WeatherImage';

class FiveDayWeatherForecast extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			cityname: '',
			cityweatherdata: []
		}
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
            	<Link
            		className='btn btn-primary'
            		to={{
            			pathname: '/details'
            		}}>
            	</Link>
			</div>
        )
	}
}

export default FiveDayWeatherForecast;