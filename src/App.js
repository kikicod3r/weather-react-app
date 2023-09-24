import React from "react";
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="TextCenter">Weather App</h1>
      </header>
      <Weather defaultCity="Chicago" />

      <footer className="TextCenter">
        {" "}
        This project was coded by Markita Lilly and is open-sourced on{" "}
        <a
          href="https://github.com/kikicod3r/weather-react-app"
          target="_blank"
          rel="noreferrer"
        >
          Github{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
