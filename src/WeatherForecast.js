import React from "react";
import Weather from "./Weather";
import App from "./App";
import CurrentTemperature from "./CurrentTemperature";
import CurrentWeatherInfo from "./CurrentWeatherInfo";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          Wednesday{" "}
          <img src={props.details.iconUrl} alt={props.details.description} />
        </div>
      </div>
    </div>
  );
}
