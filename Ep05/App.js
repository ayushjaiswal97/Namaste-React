import React from "react";
import ReactDOM from "react-dom/client";

// Using - JSX
// How to add class in jsx -className
const jsxHeading = <h1 className="heading">Namaste React using JSX</h1>;
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
