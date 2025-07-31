import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTML (render)
const jsxHeading = (
  <h1 id="heading" className="head">
    Namaste React using JSX 🚀
  </h1>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
