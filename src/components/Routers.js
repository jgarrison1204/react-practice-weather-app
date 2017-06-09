import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import App from '../App';
import FiveDayWeatherForecast from './FiveDayWeatherForecast';

class Navigation extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/' component={App}></Route>
					<Route exact path='/weather' component={FiveDayWeatherForecast}></Route>
				</Switch>
			</Router>
		)
	}
}

export default Navigation