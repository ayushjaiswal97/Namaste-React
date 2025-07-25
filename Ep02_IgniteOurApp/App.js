import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement(
        "div",
        {id: "parent"},[
        React.createElement("div",{id: "child"},[
                React.createElement("h1",{id: "heading1"},"This is Namaste React🚀"), 
            React.createElement("h2",{id: "heading2"},"I'm a H2 tag"),
        ]),
        React.createElement("div",{id: "child2"},[
                React.createElement("h1",{id: "heading1"},"I'm a H1 tag"), 
            React.createElement("h2",{id: "heading2"},"I'm a H2 tag"),
        ])
    ]);
    
    console.log(parent);
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);