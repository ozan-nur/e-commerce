import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function ShopPage() {
  return React.createElement(
    "div",
    { className: "px-6 md:px-12 py-10 flex justify-center" },

    // Grid container
    React.createElement(
      "div",
      {
        className:
          "grid grid-cols-2 gap-6 justify-items-center"
      },

      products.map(function (product) {
        return React.createElement(ProductCard, {
          key: product.id,
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          badge: product.badge
        });
      })
    )
  );
}