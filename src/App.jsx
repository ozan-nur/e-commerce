import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PageContent from "./layout/PageContent";
import "./index.css";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Contact from "./pages/Contact";
import TeamPage from "./pages/TeamPage";
import AboutPage from "./pages/AboutPage";
import SignupPage from "./pages/SignupPage";

export default function App() {
  return React.createElement(
    BrowserRouter,
    null,
    React.createElement(Header, null),
    React.createElement(
      PageContent,
      null,
      React.createElement(
        Switch,
        null,
        React.createElement(Route, { exact: true, path: "/", component: HomePage }),
        React.createElement(Route, { path: "/shop", component: ShopPage }),
        React.createElement(Route, { path: "/product/:id", component: ProductDetailPage }),
        React.createElement(Route, { path: "/contact", component: Contact }),
        React.createElement(Route, { path: "/team", component: TeamPage }),
        React.createElement(Route, { path: "/about", component: AboutPage }),
        React.createElement(Route, { path: "/signup", component: SignupPage })
      )
    ),
    React.createElement(Footer, null)
  );
}