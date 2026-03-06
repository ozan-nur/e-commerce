import React from "react";
import { ShoppingCart } from "lucide-react";

export default function ProductDetailPage() {
  return React.createElement(
    "div",
    { className: "px-4 md:px-12 pb-10" },

    React.createElement(
      "div",
      { className: "flex flex-col md:flex-row gap-8" },

      // IMAGE
      React.createElement(
        "div",
        { className: "flex-1 h-80 md:h-[500px] bg-gray-200 flex items-center justify-center" },
        "Product Image"
      ),

      // INFO
      React.createElement(
        "div",
        { className: "flex-1 flex flex-col gap-4" },

        React.createElement(
          "h1",
          { className: "text-xl md:text-2xl font-bold" },
          "Product Name"
        ),

        React.createElement(
          "p",
          { className: "text-lg md:text-xl font-semibold" },
          "$29.99"
        ),

        React.createElement(
          "p",
          { className: "text-sm text-gray-600" },
          "This is a sample product description. It explains the product features and details."
        ),

        React.createElement(
          "button",
          {
            className:
              "flex items-center justify-center gap-2 bg-black text-white py-3 rounded-lg font-semibold mt-4"
          },
          React.createElement(ShoppingCart, { size: 20 }),
          "Add to Cart"
        )
      )
    )
  );
}