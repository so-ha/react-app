// 1)
// const heading = React.createElement("h1", {}, "Hello React");
// console.log(heading)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)

// 2)
//Create this using React
{/* <div id="parent">
    <div id="child">
        <h1>Hello React</h1>
    </div>
</div> */}
// const parentNode = React.createElement(
//     "div", 
//     {id: "parent"}, 
//     React.createElement("div", {id: "child"},
//     React.createElement("h1", {}, "Hello React" )))

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parentNode)

// 3)
//Create this using React
{/* <div id="parent">
    <div id="child">
        <h1>Hello React</h1>
        <h2>Hello World</h1>
    </div>
</div> */}
// const parentNode = React.createElement(
//     "div", 
//     {id: "parent"}, 
//     React.createElement("div", {id: "child"},
//     [React.createElement("h1", {}, "Hello React" ), React.createElement("h1", {}, "Hello World" )]))

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parentNode)