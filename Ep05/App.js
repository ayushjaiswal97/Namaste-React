
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  {id: "parent"},
  [
    React.createElement(
      "div",
      {id: "child", key: "child1"},
      [
        React.createElement("h1", {id: "heading1", key: "h1-1"}, "I'm a H1 tag"),
        React.createElement("h2", {id: "heading2", key: "h2-1"}, "This is Namaste React")
      ]
    ),
    React.createElement(
      "div", 
      {id: "child2", key: "child2"},
      [
        React.createElement("h1", {id: "heading3", key: "h1-2"}, "I'm a H1 tag"),
        React.createElement("h2", {id: "heading4", key: "h2-2"}, "I'm a H2 tag")
      ]
    )
  ]
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
