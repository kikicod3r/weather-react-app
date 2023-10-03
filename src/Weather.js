import React, { useState } from "react";
import CurrentWeatherInfo from "./CurrentWeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function Weather(props) {
  const [weatherDetails, setWeatherDetails] = useState({ pageReady: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherDetails({
      pageReady: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleSearchInput(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "1687841bccf274a08foafbat6c3f1ff0";
    let units = "imperial";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherDetails.pageReady) {
    return (
      <div className="Weather container mb-4">
        <form className="SearchForm TextCenter" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                className="SearchBox mb-3"
                type="search"
                placeholder="Enter a city..."
                autoFocus="on"
                onChange={handleSearchInput}
              />
            </div>
            <div className="col-3">
              <input
                className="SearchButton btn"
                type="submit"
                value="Search"
              />
            </div>
          </div>
        </form>
        <CurrentWeatherInfo details={weatherDetails} />
        <WeatherForecast coordinates={weatherDetails.coordinates} />
      </div>
    );
  } else {
    search();
    return <h3 className="LoadingScreen"> Loading... </h3>;
  }
}
