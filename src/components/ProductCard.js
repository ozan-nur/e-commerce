import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const { id, name, price, image, badge } = props;

  return React.createElement(
    Link,
    {
      to: "/product/" + id,
      className: "block w-full"
    },
    React.createElement(
      "div",
      {
        className:
          "flex flex-col rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-48"
      },

      // IMAGE
      React.createElement(
        "div",
        {
          className:
            "w-full aspect-square overflow-hidden relative bg-gray-100 flex items-center justify-center"
        },
        React.createElement("img", {
          src: image,
          className:
            "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        }),
        badge &&
          React.createElement(
            "span",
            {
              className:
                "absolute top-2 left-2 text-xs px-2 py-1 rounded-full bg-red-500 text-white shadow"
            },
            badge
          )
      ),

      // INFO
      React.createElement(
        "div",
        { className: "flex flex-col gap-2 p-4 text-center" },
        React.createElement(
          "h3",
          {
            className:
              "text-sm md:text-base font-semibold tracking-wide text-gray-800 line-clamp-2"
          },
          name
        ),
        React.createElement(
          "div",
          { className: "flex justify-center items-center gap-3 mt-2" },
          React.createElement(
            "span",
            { className: "font-bold text-lg text-gray-900" },
            "$" + price
          ),
          React.createElement(
            "button",
            {
              className:
                "p-2.5 bg-blue-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition"
            },
            React.createElement(ShoppingCart, { size: 16 })
          )
        )
      )
    )
  );
}