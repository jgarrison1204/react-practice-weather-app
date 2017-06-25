import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import App from '../App';
import FiveDayWeatherForecast from './FiveDayWeatherForecast';
import WeatherDetail from './WeatherDetail';

class Navigation extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path='/' component={App}></Route>
					<Route path='/weather' component={FiveDayWeatherForecast}></Route>
					<Route path='/details' component={WeatherDetail}></Route>
				</div>
			</Router>
		)
	}
}

export default Navigation