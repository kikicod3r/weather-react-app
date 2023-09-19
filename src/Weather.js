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

      <ul className="TextCenter WeatherDetails">
        <li>Precipitation: </li>
        <li>Humidity: </li>
        <li>Wind: </li>
      </ul>
    </div>
  );
}
