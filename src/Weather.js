import React from "react";

export default function Weather() {
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

      <h1> Chicago </h1>
      <ul>
        <li>Thursday 10:12 </li>
        <li>Partly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="Partly Cloudy"
              className="float-left"
            />
            <div className="float-left">
              <span className="currentTemperature">65</span>
              <span className="units">°F</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul className="TextCenter WeatherDetails">
            <li>Precipitation: 10%</li>
            <li>Humidity: 42% </li>
            <li>Wind: 15mph </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
