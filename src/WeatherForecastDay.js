import React from "react";

export default function WeatherForecastDay(props) {
  function maximumTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`;
  }

  function minimumTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-weekday">{day()}</div>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition.icon}
      />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-max">{maximumTemperature()}° </span>
        <span className="WeatherForecast-min"> {minimumTemperature()}°</span>
      </div>
    </div>
  );
}
