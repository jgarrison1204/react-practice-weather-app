import React, { Component } from 'react';
import InputWeather from './components/InputWeather';
import Api from './utils/api'
import './styles.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userinput: '',
            cityweatherdata: []
        }
        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.returnData = this.returnData.bind(this);
    }

    handleChange(event) {
        this.setState({
            userinput: event.target.value
        })
    }

    handleSubmit() {
        this.returnData(this.state.userinput);
        this.setState({
            userinput: ''
        })
    }
    
    returnData(city) {
        Api.fetchWeatherData(city)
        .then(weather => {
            let returnWeatherData = weather.map(data => {
                return `${Math.round(data.temp.day)} `;
            });
            this.setState({
                cityweatherdata: returnWeatherData
            })
        });
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
                    handleSubmit = {this.handleSubmit}
                />
                <div>
                    {this.state.cityweatherdata}
                </div>
            </div>
        );
    }
}

export default App;

