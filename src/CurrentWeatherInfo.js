import React from "react";
import CurrentTemperature from "./CurrentTemperature";

import CurrentDate from "./CurrentDate";

export default function CurrentWeatherInfo(props) {
  return (
    <div className="CurrentWeatherInfo">
      <h1 className="mb-3"> {props.details.city} </h1>
      <ul>
        <li className="mb-2">
          {" "}
          <CurrentDate date={props.details.date} />{" "}
        </li>
        <li className="text-capitalize mb-2">{props.details.description}</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <div className="d-flex mt-2">
            <img src={props.details.iconUrl} alt={props.details.description} />

            <CurrentTemperature fahrenheit={props.details.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul className="TextCenter WeatherDetails mb-5">
            <li>Humidity: {props.details.humidity}% </li>
            <li>Wind: {Math.round(props.details.wind)} mph </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
