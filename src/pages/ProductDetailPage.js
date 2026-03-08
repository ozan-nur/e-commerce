import React from "react";
import { ShoppingCart } from "lucide-react";
import { useParams } from "react-router-dom";
import products from "../data/products";

export default function ProductDetailPage() {

  const { id } = useParams();

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return React.createElement(
      "div",
      { className: "px-4 md:px-12 py-10 text-center text-gray-500" },
      "Product not found"
    );
  }

  return React.createElement(
    "div",
    { className: "px-4 md:px-12 pb-12 pt-6" },

    React.createElement(
      "div",
      { className: "flex flex-col md:flex-row gap-10" },

      // IMAGE
      React.createElement(
        "div",
        {
          className:
            "flex-1 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center"
        },
        React.createElement("img", {
          src: product.image,
          className: "w-full h-[360px] md:h-[520px] object-cover"
        })
      ),

      // INFO
      React.createElement(
        "div",
        { className: "flex-1 flex flex-col gap-4" },

        React.createElement(
          "h1",
          { className: "text-2xl md:text-3xl font-bold text-gray-900" },
          product.name
        ),

        React.createElement(
          "p",
          { className: "text-xl font-semibold text-[#6B4C3B]" },
          "$" + product.price
        ),

        product.badge &&
          React.createElement(
            "span",
            {
              className:
                "inline-block text-xs px-3 py-1 rounded-full bg-red-500 text-white w-fit"
            },
            product.badge
          ),

        React.createElement(
          "p",
          { className: "text-gray-600 leading-relaxed mt-2" },
          "High quality product designed for everyday use. Minimal style combined with durability and comfort."
        ),

        React.createElement(
          "button",
          {
            className:
              "flex items-center justify-center gap-2 bg-[#6B4C3B] text-white py-3 px-6 rounded-lg font-semibold mt-4 hover:opacity-90 transition"
          },
          React.createElement(ShoppingCart, { size: 20 }),
          "Add to Cart"
        )
      )
    )
  );
}