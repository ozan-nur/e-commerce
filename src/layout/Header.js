import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";

export default function Header() {
  return React.createElement(
    "header",
    {
      className:
        "flex justify-between items-center px-6 py-4 bg-[#6B4C3B] text-[#F5EBD9] shadow-md",
    },

    // Logo
    React.createElement(Link, { to: "/" },
      React.createElement("img", {
        src: logo,
        alt: "Logo",
        className: "h-9 cursor-pointer",
      })
    ),

    // Navigation
    React.createElement(
      "nav",
      { className: "flex items-center gap-4" },

      React.createElement(
        Link,
        {
          to: "/",
          className:
            "px-4 py-2 rounded-lg bg-[#F5EBD9] text-[#6B4C3B] font-medium transition hover:bg-white hover:shadow",
        },
        "Home"
      ),

      React.createElement(
        Link,
        {
          to: "/shop",
          className:
            "px-4 py-2 rounded-lg bg-[#F5EBD9] text-[#6B4C3B] font-medium transition hover:bg-white hover:shadow",
        },
        "Shop"
      ),

      React.createElement(
        Link,
        {
          to: "/contact",
          className:
            "px-4 py-2 rounded-lg bg-[#F5EBD9] text-[#6B4C3B] font-medium transition hover:bg-white hover:shadow",
        },
        "Contact"
      )
    )
  );
}