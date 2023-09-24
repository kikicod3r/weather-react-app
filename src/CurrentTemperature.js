import React, { useState } from "react";

export default function CurrentTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === `fahrenheit`) {
    return (
      <div className="CurrentTemperature">
        <span className="currentTemperature">
          {Math.round(props.fahrenheit)}
        </span>
        <span className="units">
          °F|{" "}
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    let celsius = ((props.fahrenheit - 32) * 5) / 9;

    return (
      <div className="CurrentTemperature">
        <span className="currentTemperature">{Math.round(celsius)}</span>
        <span className="units">
          {" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>{" "}
          | °C
        </span>
      </div>
    );
  }
}
