import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
        this.returnData(this.state.userinput);
        this.setState({
            userinput: ''
        })
    }
    
    render() {
        // variable to hold userinput to be passed as the value to the search key in the to object in the Link component
        let userInputToPassToSearch = this.state.userinput;
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
                <Link 
                    className='btn btn-success'
                    to={{
                        pathname: '/weather',
                        search: `city=${userInputToPassToSearch}`}}>
                    Click This Button
                </Link>
            </div>
        );
    }
}

export default App;

