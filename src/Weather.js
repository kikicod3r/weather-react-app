import { useState } from "react";
import CurrentDate from "./CurrentDate";
import React from "react";
import axios from "axios";

export default function Weather(props) {
  const [weatherDetails, setWeatherDetails] = useState({ pageReady: false });

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

  if (weatherDetails.pageReady) {
    return (
      <div className="Weather container">
        <form className="SearchForm TextCenter">
          <input
            className="SearchBox"
            type="search"
            placeholder="Enter a city..."
            autoFocus="on"
          />
          <input className="SearchButton" type="submit" value="Search" />
        </form>

        <h1> {weatherDetails.city} </h1>
        <ul>
          <li>
            {" "}
            <CurrentDate date={weatherDetails.date} />{" "}
          </li>
          <li className="text-capitalize">{weatherDetails.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="d-flex mt-2">
              <img
                src={weatherDetails.iconUrl}
                alt={weatherDetails.description}
              />

              <span className="currentTemperature">
                {Math.round(weatherDetails.temperature)}
              </span>
              <span className="units">°F</span>
            </div>
          </div>
          <div className="col-6">
            <ul className="TextCenter WeatherDetails">
              <li>Precipitation: 10%</li>
              <li>Humidity: {weatherDetails.humidity}% </li>
              <li>Wind: {Math.round(weatherDetails.wind)} mph </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "1687841bccf274a08foafbat6c3f1ff0";

    let units = "imperial";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
