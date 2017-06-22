import React from 'react';

function WeatherImage(props) {
	let date = props.data.date;
	let d = new Date(date * 1000);
	let formatedDate = d.toLocaleDateString();
	return (
       // webpack you need to use require(..path) to have images render from the server in localhost.
		<div className='image-container' onClick={props.handleRoute}>
			<img className='image-wrapper' src={require(`../weather-icons/${props.data.icon}.svg`)} alt="weather icon"/>
			<p className='date-wrapper'>{formatedDate}</p>
		</div>
	)
}

export default WeatherImage;