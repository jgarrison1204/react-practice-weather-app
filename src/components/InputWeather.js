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
				<form>
					<input
						placeholder='Los Angeles, California' 
						type='text'
						value={this.props.cityWeather}
						onChange={this.props.handleChange}/>
				</form>			
			</div>
		)
	}
}

export default InputWeather;