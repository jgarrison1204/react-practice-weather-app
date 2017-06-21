import React from 'react';
import {Route} from 'react-router-dom';

function WeatherImage(props) {
	let d = new Date();
	// getDate returns the day of the month, increment it by passing index from props then setDate returns epoch time.
	let incrementDate = d.setDate(d.getDate() + props.dateIncrementor);
	let convertFromEpochTime = new Date(incrementDate).toLocaleDateString();
	return (
       // webpack you need to use require(..path) to have images render from the server in localhost.
		<div className='col-3 image-container' onClick={props.handleRoute}>
			<img className='image-wrapper' src={require(`../weather-icons/${props.data.icon}.svg`)} alt="weather icon"/>
			<p className='date-wrapper'>{convertFromEpochTime}</p>
		</div>
	)
}

export default WeatherImage;