import React, { Component } from 'react';
import InputWeather from './components/InputWeather';
import Api from './utils/api'
import WeatherImage from './components/WeatherImage';
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

    handleSubmit(event) {
        this.returnData(this.state.userinput);
        this.setState({
            userinput: ''
        })
    }
    
    returnData(city) {
        Api.fetchWeatherData(city)
        .then(weather => {
            this.setState({
                cityweatherdata: weather
            })
        });
    }

    render() {
        // create an array of images with the image rendering from the api's icon property.
        const weatherImages = this.state.cityweatherdata.map((image, i) => {
            // webpack you need to use require(..path) to have images render from the server in localhost.
            return (
                <WeatherImage
                    key= {image + i}
                    icon= {image}
                    dateIncrementor= {i}
                />
            )
        });
        return (
            <div className="App">
                <div className="App-header">
                  <h2>Enter a City and state</h2>
                </div>
                <InputWeather
                    cityWeather= {this.state.userinput}
                    handleChange= {this.handleChange}
                    handleSubmit= {this.handleSubmit}
                />
                <div className='row'>
                    {weatherImages}
                </div>
            </div>
        );
    }
}

export default App;

