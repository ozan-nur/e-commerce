import React from "react";

export default function PageContent({ children }) {
  return React.createElement(
    "main",
    { className: "p-4 bg-[#A8B38F] min-h-screen" },
    children
  );
}