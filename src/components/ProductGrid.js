import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";

export default function ProductGrid() {
  return React.createElement(
    "div",
    { className: "px-4 md:px-12 py-10" },
    React.createElement(
      "div",
      {
        className:
          "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center"
      },
      products.map((product) =>
        React.createElement(ProductCard, {
          key: product.id,
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          badge: product.badge
        })
      )
    )
  );
}