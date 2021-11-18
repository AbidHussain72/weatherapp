import NavBar from "./components/NavBar"
import Status from "./components/Status"
import styled from "styled-components";
import React from "react";
const Container = styled.div `
  background: #55c5ff;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
`;
const API_KEY = "278744deec389779ed457e7be053e78f";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            city: undefined,
            country: undefined,
            icon: undefined,
            main: undefined,
            celsius: undefined,
            temp_max: undefined,
            temp_min: undefined,
            description: "",
            error: false

        };

    }
    calCelsius(temp) {
        let cell = Math.floor(temp - 273.15);
        return cell;
    }
    getWeather = async(e) => {
        e.preventDefault();

        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
        const response = await api_call.json();
        console.log(response);
        this.setState({
            city: response.name,
            country: response.sys.country,
            icon: response.weather[0].icon,
            celsius: this.calCelsius(response.main.temp),
            temp_max: this.calCelsius(response.main.temp_max),
            temp_min: this.calCelsius(response.main.temp_min),
            description: response.weather[0].description

        });
    }
    state = {

    }
    render() {
        return ( <
            Container >

            <
            NavBar loadWeather = { this.getWeather }
            / > <
            Status city = { this.state.city }
            country = { this.state.country }
            temp_celsius = { this.state.celsius }
            temp_max = { this.state.temp_max }
            temp_min = { this.state.temp_min }
            description = { this.state.description }
            icon = { this.state.icon }
            / >

            <
            /Container >
        );

    }
}



export default App;