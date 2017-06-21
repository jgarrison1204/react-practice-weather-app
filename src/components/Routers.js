import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import App from '../App';
import FiveDayWeatherForecast from './FiveDayWeatherForecast';

function test(props) {
	return (
		<div>Place holder</div>
	)
}

class Navigation extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path='/' component={App}></Route>
					<Route path='/weather' component={FiveDayWeatherForecast}></Route>
					<Route path='/details' component={test}></Route>
				</div>
			</Router>
		)
	}
}

export default Navigation