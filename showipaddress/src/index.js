import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ShowIpAddress from "./ShowIpAddress";

var destination = document.querySelector("#container");

ReactDOM.render(
  <div>
    <ShowIpAddress />
  </div>,
  destination
);
