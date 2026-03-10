import React from "react";

function TeamPage() {
  return React.createElement(
    "div",
    { className: "min-h-screen flex flex-col items-center py-10 px-6" },

    React.createElement(
      "h1",
      { className: "text-3xl md:text-4xl font-bold mb-10" },
      "Our Team"
    ),

    React.createElement(
      "div",
      { className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full" },

      React.createElement(
        "div",
        { className: "bg-white shadow-md rounded-xl p-6 text-center" },

        React.createElement("img", {
          src: "https://media.licdn.com/dms/image/v2/D4D03AQG_48mudVwfbA/profile-displayphoto-shrink_400_400/B4DZnvQT71GwAg-/0/1760655655087?e=1774483200&v=beta&t=pWJQ0XGBc0rgP4r3sD_rW0LHcKbyOs6h5WwL7nUo0To",
          className: "w-32 h-32 rounded-full mx-auto mb-4",
        }),

        React.createElement(
          "h2",
          { className: "text-xl font-semibold" },
          "Ozan Nur"
        ),

        React.createElement(
          "p",
          { className: "text-gray-500 mt-1" },
          "Full Stack Developer"
        ),

        React.createElement(
          "p",
          { className: "text-sm text-gray-600 mt-3" },
          "Responsible for building and maintaining the entire e-commerce platform."
        )
      )
    )
  );
}

export default TeamPage;