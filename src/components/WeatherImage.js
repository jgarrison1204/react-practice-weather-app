import React from 'react';



function WeatherImage(props) {
	let d = new Date();
	// getDate returns the day of the month, increment it then setDate returns epoch time.
	let incrementDate = d.setDate(d.getDate() + props.dateIncrementor);
	let convertFromEpochTime = new Date(incrementDate).toLocaleDateString();
	return (
		<div className='col-3 col-3 image-container'>
			<img className='image-wrapper' src={require(`../weather-icons/${props.icon}.svg`)} alt="weather icon"/>
			<p className='date-wrapper'>{convertFromEpochTime}</p>
		</div>
	)
}

export default WeatherImage;