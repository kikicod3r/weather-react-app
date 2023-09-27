import React from "react";
import axios from "axios";
import Weather from "./Weather";
import App from "./App";
import CurrentTemperature from "./CurrentTemperature";
import CurrentWeatherInfo from "./CurrentWeatherInfo";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  let latitude = props.coordinates.latitude;
  let longitude = props.coordinates.longitude;
  let apiKey = "1687841bccf274a08foafbat6c3f1ff0";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-weekday">Wednesday </div>
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
            alt="clear-sky"
          />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-max">70° </span>
            <span className="WeatherForecast-min"> 54°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
