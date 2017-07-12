import React from 'react';
import DateConverter from './DateConverter';

function WeatherImage(props) {
	let date = props.data.date;
	let d = new Date(date * 1000);
	// Returns formated date from DateConverter conmponent.
	let formatedDate = DateConverter(d.getDay(), d.getMonth(), d.getDate());
	return (
		// webpack you need to use require(..path) to have images render from the server in localhost. props.data.icon comes from the API.
		<section className='weather-wrapper'>
			<div className='image-container' onClick={props.handleRoute}>
				<img className='image-wrapper' src={require(`../weather-icons/${props.data.icon}.svg`)} alt="weather icon"/>
				<p className='date-wrapper'>{formatedDate}</p>
			</div>
		</section>
	);
}

export default WeatherImage;