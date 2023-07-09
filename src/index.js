import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Plans Section Components/App";
import App2 from "./Countdown Section Components/App2";

ReactDOM.createRoot(document.querySelector("#card-section")).render(<App />);
ReactDOM.createRoot(document.querySelector("#countdown-section")).render(
  <App2 />
);
