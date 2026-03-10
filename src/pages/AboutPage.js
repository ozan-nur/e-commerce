import React from "react";

function AboutPage() {
  return React.createElement(
    "div",
    { className: "min-h-screen flex flex-col items-center px-6 py-12 text-center" },

    React.createElement(
      "h1",
      { className: "text-3xl md:text-4xl font-bold mb-6" },
      "About Us"
    ),

    React.createElement(
      "p",
      { className: "max-w-6xl text-white mb-6" },
      "We are a passionate team focused on building a modern and user-friendly e-commerce experience. Our mission is to provide high-quality products while creating a seamless online shopping journey."
    ),

    React.createElement(
      "p",
      { className: "max-w-6xl text-white mb-6" },
      "This platform was developed with modern web technologies including React, Redux and TailwindCSS. Our goal is to combine clean design with powerful functionality."
    ),

    React.createElement(
      "p",
      { className: "max-w-6xl text-white" },
      "Customer satisfaction and continuous improvement are at the core of everything we build."
    )
  );
}

export default AboutPage;