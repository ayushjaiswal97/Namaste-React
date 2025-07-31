import React from "react";
import ReactDOM from "react-dom/client";

// Using - JSX
// React Element
  const Heading = (
  <h1
   className="heading">Namaste React using JSX
  </h1>
  );

  // React Component
 // React Functional Component - Just a Normal JS function.
 const HeadingComponent = () => {
  return (
    <h1>This is a React Functional Component</h1>
  )
 };

 const HeadingComponent2 = () => {
  return <h2>React Functional Component2</h2>
 };

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<HeadingComponent2/>);
