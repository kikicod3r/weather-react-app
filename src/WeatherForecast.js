import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [forecastReady, setForecastReady] = useState(false);
  const [fullForecast, setFullForecast] = useState(null);

  useEffect(() => {
    setForecastReady(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setFullForecast(response.data.daily);
    setForecastReady(true);
  }
  function load() {
    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    let apiKey = "1687841bccf274a08foafbat6c3f1ff0";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (forecastReady) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {fullForecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
