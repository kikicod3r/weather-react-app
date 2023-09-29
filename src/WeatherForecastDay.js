import React from "react";

export default function WeatherForecastDay(props) {
  function maximumTemperature() {
    let temperature = Math.round(props.data.daily.temperature.maximum);
    return `${temperature}`;
  }

  function minimumTemperature() {
    let temperature = Math.round(props.data.daily.temperature.minimum);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  <div>
    <div className="WeatherForecast-weekday">{day()}</div>
    <img
      src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
      alt="clear-sky"
    />
    <div className="WeatherForecast-temperatures">
      <span className="WeatherForecast-max">{maximumTemperature()}° </span>
      <span className="WeatherForecast-min"> {minimumTemperature()}°</span>
    </div>
  </div>;
}
