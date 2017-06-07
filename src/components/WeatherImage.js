import React from 'react';

function WeatherImage(props) {
	return (
		<div className='col-3 col-3 image-container'>
			<img className='image-wrapper' src={require(`../weather-icons/${props.icon}.svg`)} alt="weather icon"/>
		</div>
	)
}

export default WeatherImage;