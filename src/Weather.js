import React from "react";

export default function Weather() {
  return (
    <div className="Weather container">
      <form className="SearchForm TextCenter">
        <input
          className="SearchBox"
          type="search"
          placeholder="Enter a city..."
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
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="Partly Cloudy"
          />
          65° F
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
