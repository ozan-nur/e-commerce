import React from "react";
import { Truck, ShieldCheck, CreditCard } from "lucide-react";

export default function TrustBadges() {
  return React.createElement(
    "div",
    {
      className:
        "grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-12 text-center",
    },

    React.createElement(
      "div",
      { className: "flex flex-col items-center gap-2" },
      React.createElement(Truck, { size: 28, className: "text-[#6B4C3B]" }),
      React.createElement("h4", { className: "font-semibold" }, "Free Shipping"),
      React.createElement(
        "p",
        { className: "text-sm text-gray-500" },
        "Orders over $50"
      )
    ),

    React.createElement(
      "div",
      { className: "flex flex-col items-center gap-2" },
      React.createElement(ShieldCheck, { size: 28, className: "text-[#6B4C3B]" }),
      React.createElement("h4", { className: "font-semibold" }, "Secure Payment"),
      React.createElement(
        "p",
        { className: "text-sm text-gray-500" },
        "100% protected payments"
      )
    ),

    React.createElement(
      "div",
      { className: "flex flex-col items-center gap-2" },
      React.createElement(CreditCard, { size: 28, className: "text-[#6B4C3B]" }),
      React.createElement("h4", { className: "font-semibold" }, "Easy Returns"),
      React.createElement(
        "p",
        { className: "text-sm text-gray-500" },
        "30 day return policy"
      )
    )
  );
}