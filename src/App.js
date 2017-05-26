import React, { Component } from 'react';
import InputWeather from './components/InputWeather';
import './styles.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userinput: ''
        }
    this.handleChange = this.handleChange.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            userinput: event.target.value
        })
    }

    handleSubmit(event) {
        this.setState({
            userinput: ''
        })
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                  <h2>Enter a City and state</h2>
                </div>
                <InputWeather
                    cityWeather = {this.state.userinput}
                    handleChange = {this.handleChange}
                />
            </div>
        );
    }
}

export default App;

