import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);
  const [weatherDetails, setweatherDetails] = useState({});

  function showForecast(response) {
    setDataLoaded(true);
    setweatherDetails({
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "a710bd8bd76400c9658ef649d9e81728";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(showForecast);
  }
  function citySearch(event) {
    setCity(event.target.value);
  }
  let form = (
    <form className="SearchForm TextCenter" onSubmit={handleSubmit}>
      <input
        className="SearchBox"
        type="search"
        placeholder="Enter a city..."
        onChange={citySearch}
      />
      <input className="SearchButton" type="submit" value="Search" />
    </form>
  );

  if (dataLoaded) {
    return (
      <div>
        {form}
        <ul className="Weather TextCenter">
          <li>Temperature: {Math.round(weatherDetails.temperature)}°F</li>
          <li>Humidity: {weatherDetails.humidity}%</li>
          <li>Wind: {weatherDetails.wind} mph</li>
          <li>
            {" "}
            <img src={weatherDetails.icon} alt={weatherDetails.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
