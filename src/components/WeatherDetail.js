import React from 'react';
import WeatherImage from './WeatherImage';

function WeatherDetail(props) {
	let dataForDay = props.location.state;
	return (
		// Renders the weather detials for a speciic day.  Weather image component used.
		<div>			
			<div className="App-header">
				<header>
					<h2>Weather Details</h2>
				</header>
			</div>	
			<section className='container'>
				<div className='center detail-list-item'>
					<WeatherImage data={dataForDay}/>
					<p className='lead'>{dataForDay.city}</p>
					<p className='lead'>{dataForDay.description}</p>
					<p className='lead'>min temp: {Math.round(dataForDay.mintemp,2)} degrees</p>
					<p className='lead'>max temp: {Math.round(dataForDay.maxtemp,2)} degrees</p>
					<p className='lead'>humidity: {dataForDay.humidity}</p>
				</div>
			</section>
		</div>
	);
}

export default WeatherDetail;