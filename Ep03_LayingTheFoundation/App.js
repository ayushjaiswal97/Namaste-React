import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object = HTMLElement(render)
// const heading = React.createElement(
//     "h1", 
//     {id: "heading"},
//     "Namaste React🚀"
// );
// console.log(heading);

// JSX => is not HTML in JavaScript or it's HTML - like or XML - like syntax
// React Element 
const heading = (
  <h1 className="head">
    Namaste React using JSX🚀
  </h1>
);

// React Component
// Class Component -
// Functional Component 


// Functional Component 
const HeadingComponent = () => (
    <div id="container">
      <h1 className="head">Namaste React using Functional Component🚀</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);