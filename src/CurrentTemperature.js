import React, { useState } from "react";

export default function CurrentTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  if (unit === "fahrenheit") {
    return (
      <div className="CurrentTemperature">
        <span className="currentTemperature">
          {Math.round(props.fahrenheit)}
        </span>
        <span className="units">°F</span>
      </div>
    );
  } else {
    return "C";
  }
}
