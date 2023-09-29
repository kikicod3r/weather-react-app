import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [forecastReady, setForecastReady] = useState(false);
  const [fullForecast, setFullForecast] = useState(null);
  function handleResponse(response) {
    setFullForecast(response.data.daily);
    setForecastReady(true);
    console.log(response.data);
  }
  if (forecastReady) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={fullForecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    let apiKey = "1687841bccf274a08foafbat6c3f1ff0";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
