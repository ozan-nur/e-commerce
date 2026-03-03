import React from "react";
import { ShoppingCart } from "lucide-react";

export default function ProductCard() {
  return React.createElement(
    "div",
    { className: "flex flex-col border rounded-lg overflow-hidden hover:shadow-lg transition bg-[#6B4C3B] text-[#F5EBD9]" },
    React.createElement(
      "div",
      { className: "bg-[#A8B38F] h-40 md:h-52 flex items-center justify-center" },
      "Image"
    ),
    React.createElement(
      "div",
      { className: "flex flex-col gap-2 p-4" },
      React.createElement(
        "h3",
        { className: "text-sm md:text-base font-semibold" },
        "Product Name"
      ),
      React.createElement(
        "div",
        { className: "flex justify-between items-center" },
        React.createElement(
          "span",
          { className: "font-bold" },
          "$99.00"
        ),
        React.createElement(
          "button",
          { className: "p-2 bg-[#F5EBD9] text-[#6B4C3B] rounded flex items-center justify-center" },
          React.createElement(ShoppingCart, { size: 16 })
        )
      )
    )
  );
}