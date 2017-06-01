import React, {Component} from 'react';

class InputWeather extends Component {
	constructor(props) {
		super(props);

		this.handleSubmitPreventDefault = this.handleSubmitPreventDefault.bind(this);
	}

	handleSubmitPreventDefault(event) {
		event.preventDefault();
		this.props.handleSubmit(event.target.value);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmitPreventDefault}>
					<input
						placeholder='Los Angeles, California' 
						type='text'
						value={this.props.cityWeather}
						onChange={this.props.handleChange}/>
					<button
						type='submit'
						disabled={!this.props.cityWeather}
					> Get Weather
					</button>
				</form>			
			</div>
		)
	}
}

export default InputWeather;