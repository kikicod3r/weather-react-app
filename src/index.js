import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import "./Weather.css";
import App from "./App";
import Weather from "./Weather";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <App />
      <Weather defaultCity="New York City" />
    </div>
    <br />
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
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
