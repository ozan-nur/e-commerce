import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Home() {
  return React.createElement(
    "h1",
    { className: "text-4xl font-bold" },
    "Home Page"
  );
}

export default function AppRouter() {
  return React.createElement(
    BrowserRouter,
    null,
    React.createElement(
      Switch,
      null,
      React.createElement(Route, { exact: true, path: "/", component: Home })
    )
  );
}