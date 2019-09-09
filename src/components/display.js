import React from "react";
// importing form and weather components to a sing
import Form from "./Form";
import Weather from "./Weather";

// Api key for the site 
const Api_Key = "429736441cf3572838aa10530929f7cd";

class Dis extends React.Component {
  constructor() {
    super();
    // state that all info is null/undifined if empty
    this.state = {
      city: undefined,
      country: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: null,
      temp_min: null,
      description: "",
      error: false
    };
  }
  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  getWeather = async e => {
    e.preventDefault();

    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;

    if (country && city) {
      const api_call = await fetch(
        //   the link that the site and if user entered a city and country it fetches the info
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`
      );

      const response = await api_call.json();
// if the city is entered, the state is changed to the informed data that was fetched
      this.setState({
        city: `${response.name}, ${response.sys.country}`,
        country: response.sys.country,
        main: response.weather[0].main,
        celsius: this.calCelsius(response.main.temp),
        temp_max: this.calCelsius(response.main.temp_max),
        temp_min: this.calCelsius(response.main.temp_min),
        description: response.weather[0].description,
        error: false
      });

      console.log(response);
    } else {
        // else if not entered the page will ask you to enter a city or country
      this.setState({
        error: true
      });
    }
  };

  render() {
    return (
        <div>
            {/* form for entering the city and country */}
      <Form loadweather={this.getWeather} error={this.state.error} />
      {/* weather is displayed about the the city that was entered */}
        <Weather
          cityname={this.state.city}
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
        />
      </div>
    )
  }
}

export default Dis;