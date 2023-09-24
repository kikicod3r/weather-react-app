import React, { useState } from "react";
import CurrentWeatherInfo from "./CurrentWeatherInfo";
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
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      date: new Date(response.data.time * 1000),
    });
    console.log(response.data);
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
    search();
    return "Loading...";
  }
}
