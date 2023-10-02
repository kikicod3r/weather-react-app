import React, { useState } from "react";

export default function CurrentTemperature(props) {
  return (
    <div className="CurrentTemperature">
      <span className="currentTemperature">{Math.round(props.fahrenheit)}</span>
      <span className="units">°F</span>
    </div>
  );
}
