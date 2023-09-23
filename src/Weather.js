import { useState } from "react";

import CurrentWeatherInfo from "./CurrentWeatherInfo";
import React from "react";
import axios from "axios";

export default function Weather(props) {
  const [weatherDetails, setWeatherDetails] = useState({ pageReady: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherDetails({
      pageReady: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      iconUrl: `https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png`,
      date: new Date(response.data.time * 1000),
    });
  }

  function search() {
    const apiKey = "1687841bccf274a08foafbat6c3f1ff0";

    let units = "imperial";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleSearchInput(event) {
    setCity(event.target.value);
  }

  if (weatherDetails.pageReady) {
    return (
      <div className="Weather container">
        <form className="SearchForm TextCenter" onSubmit={handleSubmit}>
          <input
            className="SearchBox"
            type="search"
            placeholder="Enter a city..."
            autoFocus="on"
            onChange={handleSearchInput}
          />
          <input className="SearchButton" type="submit" value="Search" />
        </form>
        <CurrentWeatherInfo details={weatherDetails} />
      </div>
    );
  } else {
    return "Loading...";
  }
}
