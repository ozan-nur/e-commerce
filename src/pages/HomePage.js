import React from "react";
import ProductCard from "../components/ProductCard";
import TrustBadges from "../components/TrustBadges";
import heroBanner from "../assets/banners/hero.png";
import promoBanner from "../assets/banners/promo.png";

import p1 from "../assets/products/1.jpg";
import p2 from "../assets/products/2.jpg";
import p3 from "../assets/products/3.jpg";
import p4 from "../assets/products/4.jpg";

export default function HomePage() {

  const featuredProducts = [
    { id: 1, name: "Minimal Bracelet", price: 29, image: p1, badge: "New" },
    { id: 2, name: "Silver Necklace", price: 45, image: p2 },
    { id: 3, name: "Golden Ring", price: 35, image: p3, badge: "Sale" },
    { id: 4, name: "Elegant Earrings", price: 39, image: p4 }
  ];

  return React.createElement(
    "div",
    { className: "flex flex-col gap-16 pb-16" },

    // HERO
    React.createElement(
      "section",
      { className: "relative w-full" },

      React.createElement("img", {
        src: heroBanner,
        className: "w-full h-[340px] md:h-[500px] object-cover"
      }),

      React.createElement(
        "div",
        {
          className:
            "absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40 text-center gap-4"
        },

        React.createElement(
          "h1",
          { className: "text-3xl md:text-5xl font-bold" },
          "Minimal Jewelry Collection"
        ),

        React.createElement(
          "p",
          { className: "text-sm md:text-lg opacity-90" },
          "Timeless accessories for everyday elegance"
        ),

        React.createElement(
          "a",
          {
            href: "/shop",
            className:
              "px-6 py-3 bg-[#F5EBD9] text-[#6B4C3B] font-semibold rounded-lg hover:bg-white transition"
          },
          "Shop Now"
        )
      )
    ),

    // FEATURED PRODUCTS
    React.createElement(
      "section",
      { className: "flex flex-col gap-8 px-4 md:px-12" },

      React.createElement(
        "div",
        { className: "flex justify-between items-center" },

        React.createElement(
          "h2",
          { className: "text-2xl md:text-3xl font-bold text-[#6B4C3B]" },
          "Featured Products"
        ),

        React.createElement(
          "a",
          {
            href: "/shop",
            className: "text-sm font-semibold text-[#6B4C3B]"
          },
          "View All"
        )
      ),

      React.createElement(
        "div",
        {
          className:
            "flex gap-6 overflow-x-auto pb-4"
        },

        featuredProducts.map((product) =>
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
    ),

    // TRUST BADGES
    React.createElement(TrustBadges),

    // PROMO BANNER
    React.createElement(
      "section",
      { className: "px-4 md:px-12" },

      React.createElement(
        "div",
        { className: "relative rounded-xl overflow-hidden" },

        React.createElement("img", {
          src: promoBanner,
          className: "w-full h-[240px] md:h-[320px] object-cover"
        }),

        React.createElement(
          "div",
          {
            className:
              "absolute inset-0 flex items-center justify-center text-white bg-black/40 text-center"
          },

          React.createElement(
            "div",
            { className: "flex flex-col gap-3" },

            React.createElement(
              "h3",
              { className: "text-xl md:text-3xl font-bold" },
              "30% Summer Discount"
            ),

            React.createElement(
              "a",
              {
                href: "/shop",
                className:
                  "px-6 py-3 bg-[#F5EBD9] text-[#6B4C3B] font-semibold rounded-lg hover:bg-white transition"
              },
              "Shop Now"
            )
          )
        )
      )
    )
  );
}