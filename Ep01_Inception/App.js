
// const heading = React.createElement(
    //     "h1", 
    //     {id: "heading", xyz: "abc"},
    //     "Hello, World from React!");
    
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

    /**
     * 
     * <div id="parent">
     *   <div id="child">
     *   <h1>I'm a H1 tag</h1>
     * </div>
     * </div>
     * 
     * ReactElement(object) => HTML(Browser understands)
     */
    
    // const parent = React.createElement(
    //     "div",
    //     {id: "parent"},
    //     React.createElement(
    //         "div",
    //         {id: "child"},
    //         React.createElement("h1",{},"I'm a H1 tag")
    //     )
    // );
    
    // console.log(parent);
    
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(parent);

    // Siblings and Children
    const parent = React.createElement(
        "div",
        {id: "parent"},
        React.createElement("div",{id: "child"},[
             React.createElement("h1",{id: "heading1"},"I'm a H1 tag"), 
            React.createElement("h2",{id: "heading2"},"I'm a H2 tag"),
        ]),
        React.createElement("div",{id: "child2"},[
             React.createElement("h1",{id: "heading1"},"I'm a H1 tag"), 
            React.createElement("h2",{id: "heading2"},"I'm a H2 tag"),
        ])
    );
    
    console.log(parent);
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);