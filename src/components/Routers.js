import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
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
				<Switch>
					<Route exact path='/' component={App}></Route>
					<Route exact path='/weather' component={FiveDayWeatherForecast}></Route>
					<Route exact path='/details' component={test}></Route>
				</Switch>
			</Router>
		)
	}
}

export default Navigation