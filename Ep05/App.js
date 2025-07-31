import React from "react";
import ReactDOM from "react-dom/client";

// Using - JSX
// MultiLine JSX - wrap with ()
  const jsxHeading = (<h1
   className="heading">Namaste React using JSX
  </h1>);

  console.log(jsxHeading);

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(jsxHeading);
