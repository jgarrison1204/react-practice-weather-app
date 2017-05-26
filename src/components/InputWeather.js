import React, {Component} from 'react';

function InputWeather(props) {
	return (
		<div>
			<form onSubmit={props.handleSubmit}>
				<input
					placeholder='Los Angeles, California' 
					type='text'
					value={props.cityWeather}
					onChange={props.handleChange}/>
				<button
					type='submit'
					disabled={!props.cityWeather}
				> Get Weather
				</button>
			</form>			
		</div>
	)
}

export default InputWeather;