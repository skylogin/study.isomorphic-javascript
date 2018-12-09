import "babel-core/register";
import React from "react";
import ReactDOM from "react-dom";
import Router from "./core/Router";

function run() {
  const location = { path: window.location.pathname };
  const component = Router.match(location, window.AppState);
  ReactDOM.hydrate(component, document.getElementById("app"));
}

const loadedStates = ["complete", "loaded", "interactive"];

if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener("DOMContentLoaded", run, false);
}
