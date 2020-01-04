import React, { Component } from 'react';
import Titles from './components/Title';
import Form from './components/Form'
import Weather from './components/weather';
import './App.css';



const API_KEY = "24497ee56c02cebbd96e7b3a38b7f140"

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    windSpeed: undefined,
    description: undefined,
    error: undefined

  }

  getWeather =  async(e) => {
    e.preventDefault();
    const city =e.target.elements.city.value;
    const country =e.target.elements.country.value;

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

    const data = await api_call.json();
    if(city && country) {
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      windSpeed: data.wind.speed,
      description: data.weather[0].description,
      error: '',

    });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        windSpeed: undefined,
        description: undefined,
        error: 'Please enter the values',
  
      });
    }
  }



  render(){
    return (
      <div className="App">
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather temperature={this.state.temperature}
       city={this.state.city}
       country={this.state.country} 
       windSpeed={this.state.windSpeed}
       description={this.state.description}
       error={this.state.error}
       />
      </div>
    )
  }

}

export default App;