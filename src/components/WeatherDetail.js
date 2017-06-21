import React, {Component} from 'react';
import WeatherImage from './WeatherImage';

function WeatherDetail(props) {
	let dataForDay = props.location.state;
	return (
		<section>
 			<div className='center'>
				<WeatherImage data={dataForDay}/>
				<p className='lead'>{dataForDay.city}</p>
				<p className='lead'>{dataForDay.description}</p>
				<p className='lead'>min temp: {Math.round(dataForDay.mintemp,2)} degrees</p>
				<p className='lead'>max temp: {Math.round(dataForDay.maxtemp,2)} degrees</p>
				<p className='lead'>humidity: {dataForDay.humidity}</p>
			</div>
		</section>
	)
}

export default WeatherDetail;