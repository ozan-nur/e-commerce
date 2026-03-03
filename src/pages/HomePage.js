import React from "react";
import SliderComponent from "../components/Slider";
import ProductCard from "../components/ProductCard";
import { ShoppingCart } from "lucide-react";

export default function HomePage() {
  return React.createElement(
    "div",
    { className: "flex flex-col gap-10 pb-10" },

    // HERO / SLIDER
    React.createElement(
      "section",
      { className: "w-full" },
      React.createElement(SliderComponent)
    ),

    // FEATURED PRODUCTS
    React.createElement(
      "section",
      { className: "flex flex-col gap-6 px-4 md:px-12" },
      React.createElement(
        "div",
        { className: "flex justify-between items-center" },
        React.createElement(
          "h2",
          { className: "text-xl md:text-2xl font-bold" },
          "Featured Products"
        ),
        React.createElement(
          "a",
          { href: "/", className: "text-sm md:text-base text-blue-600" },
          "View All"
        )
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6" },
        React.createElement(ProductCard),
        React.createElement(ProductCard),
        React.createElement(ProductCard),
        React.createElement(ProductCard)
      )
    ),

    // CATEGORY BANNER
    React.createElement(
      "section",
      { className: "px-4 md:px-12" },
      React.createElement(
        "div",
        { className: "flex flex-col md:flex-row gap-4" },
        React.createElement(
          "div",
          { className: "flex-1 bg-[#6B4C3B] h-40 md:h-60 flex items-center justify-center text-lg font-semibold text-[#F5EBD9]" },
          "Category 1"
        ),
        React.createElement(
          "div",
          { className: "flex-1 bg-[#6B4C3B] h-40 md:h-60 flex items-center justify-center text-lg font-semibold text-[#F5EBD9]" },
          "Category 2"
        )
      )
    ),

    // PROMO / CTA
    React.createElement(
      "section",
      { className: "px-4 md:px-12" },
      React.createElement(
        "div",
        { className: "flex flex-col md:flex-row items-center justify-between bg-[#6B4C3B] text-[#F5EBD9] p-6 md:p-10 rounded-lg gap-6" },
        React.createElement(
          "div",
          { className: "flex flex-col gap-2 text-center md:text-left" },
          React.createElement(
            "h3",
            { className: "text-xl md:text-2xl font-bold" },
            "Special Discount 30%"
          ),
          React.createElement(
            "p",
            { className: "text-sm md:text-base" },
            "Don’t miss the opportunity."
          )
        ),
        React.createElement(
          "button",
          { className: "flex items-center gap-2 bg-[#F5EBD9] text-[#6B4C3B] px-6 py-3 rounded font-semibold" },
          React.createElement(ShoppingCart, { size: 20 }),
          " Shop Now"
        )
      )
    )
  );
}