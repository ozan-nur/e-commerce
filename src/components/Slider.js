import React from "react";
import SlickSlider from "react-slick";

export default function SliderComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return React.createElement(
    SlickSlider,
    settings,
    React.createElement("div", null, React.createElement("h3", null, "1")),
    React.createElement("div", null, React.createElement("h3", null, "2")),
    React.createElement("div", null, React.createElement("h3", null, "3")),
    React.createElement("div", null, React.createElement("h3", null, "4")),
    React.createElement("div", null, React.createElement("h3", null, "5"))
  );
}