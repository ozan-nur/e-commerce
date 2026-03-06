import React from "react";
import logo from "../assets/logo/logo.png";

export default function Header() {
  return React.createElement(
    "header",
    { className: "flex justify-between items-center p-4 bg-[#6B4C3B] text-[#F5EBD9] shadow" },
    React.createElement("img", { src: logo, alt: "Logo", className: "h-8" }),
    React.createElement(
      "nav",
      { className: "flex gap-4" },
      React.createElement("a", { href: "/", className: "hover:text-blue-600" }, "Home"),
      React.createElement("a", { href: "/shop", className: "hover:text-blue-600" }, "Shop")
    )
  );
}