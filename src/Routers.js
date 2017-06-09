import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import App from './App';
import WeatherImage from './components/WeatherImage';

const PlaceHolder = (props) => {
	console.log(props)
	return <p>PlaceHolder</p>
}

class Navigation extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/' component={App}></Route>
					<Route exact path='/weather' component={PlaceHolder}></Route>
				</Switch>
			</Router>
		)
	}
}

export default Navigation