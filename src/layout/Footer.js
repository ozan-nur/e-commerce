import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";

export default function Footer() {
  return React.createElement(
    "footer",
    { className: "text-center p-6 bg-[#6B4C3B] text-[#F5EBD9] mt-auto flex flex-col gap-4 items-center" },

    React.createElement(
      "div",
      { className: "flex gap-6 text-sm" },

      React.createElement(
        Link,
        { to: "/team", className: "hover:underline" },
        "Team"
      ),

      React.createElement(
        Link,
        { to: "/about", className: "hover:underline" },
        "About"
      )
    ),

    React.createElement(
      "div",
      { className: "flex gap-4 text-xl" },

      React.createElement(FaFacebook, null),
      React.createElement(FaTwitter, null),
      React.createElement(FaInstagram, null)
    ),

    React.createElement(
      "div",
      { className: "flex gap-4 text-lg" },

      React.createElement(AiOutlineMail, null),
      React.createElement(FiPhone, null)
    ),

    React.createElement(
      "p",
      { className: "text-sm opacity-80" },
      "© 2026 E-Commerce. All Rights Reserved."
    )
  );
}