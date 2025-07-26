import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React Element inside React Element</span>;

const Title = () => (
  <h1 className="head" tabIndex="5">
    {/* {elem} */}
    Namaste React using JSX🚀
  </h1>
);

const HeadingComponent = () => (
    <div id="container">  
        {Title()}
        <Title />
        <Title></Title>
      <h1 className="head">Namaste React using Functional Component🚀</h1>
    </div>
);

// Component composition


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);