import React from "react";

const Contact = () => {
  return React.createElement(
    "div",
    { className: "max-w-6xl mx-auto px-4 py-10" },

    React.createElement(
      "h1",
      { className: "text-3xl font-bold mb-6" },
      "Contact Us"
    ),

    React.createElement(
      "p",
      { className: "mb-8 text-gray-700" },
      "If you have any questions about our products or orders, feel free to contact us."
    ),

    React.createElement(
      "div",
      { className: "grid md:grid-cols-2 gap-10" },

      // Contact info
      React.createElement(
        "div",
        null,

        React.createElement(
          "h2",
          { className: "text-xl font-semibold mb-3" },
          "Contact Information"
        ),

        React.createElement(
          "p",
          { className: "mb-2" },
          "Email: support@store.com"
        ),

        React.createElement(
          "p",
          { className: "mb-2" },
          "Phone: +90 555 555 55 55"
        ),

        React.createElement(
          "p",
          null,
          "Location: Istanbul, Turkey"
        )
      ),

      // Contact form
      React.createElement(
        "form",
        { className: "flex flex-col gap-4" },

        React.createElement("input", {
          type: "text",
          placeholder: "Your Name",
          className: "border p-3 rounded"
        }),

        React.createElement("input", {
          type: "email",
          placeholder: "Your Email",
          className: "border p-3 rounded"
        }),

        React.createElement("textarea", {
          placeholder: "Your Message",
          className: "border p-3 rounded h-32"
        }),

        React.createElement(
          "button",
          {
            type: "submit",
            className: "bg-black text-white p-3 rounded"
          },
          "Send Message"
        )
      )
    )
  );
};

export default Contact;