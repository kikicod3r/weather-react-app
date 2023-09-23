import React from "react";
import CurrentDate from "./CurrentDate";

export default function CurrentWeatherInfo(props) {
  return (
    <div className="CurrentWeatherInfo">
      <h1> {props.details.city} </h1>
      <ul>
        <li>
          {" "}
          <CurrentDate date={props.details.date} />{" "}
        </li>
        <li className="text-capitalize">{props.details.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="d-flex mt-2">
            <img src={props.details.iconUrl} alt={props.details.description} />

            <span className="currentTemperature">
              {Math.round(props.details.temperature)}
            </span>
            <span className="units">°F</span>
          </div>
        </div>
        <div className="col-6">
          <ul className="TextCenter WeatherDetails">
            <li>Precipitation: 10%</li>
            <li>Humidity: {props.details.humidity}% </li>
            <li>Wind: {Math.round(props.details.wind)} mph </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
