import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"

// React.createElement => object => HTML
const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Namaste React 🚀"
);

//JSX - It's not HTML inside JS, it's has HTML or XML like syntax. Babel transpiles JSX into React code

const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1>; //Babel transpiles this code and make it React.createElement(...), Babel is managed by Parcel here
//Checkout Babel website to see the magic. If we write jsx in multiple line then use ()
// JSX => React.createElement => object => HTML


const App = () => {
    return (
        <>
        <Header />
        <Body />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

//Lecture 1 & 2

// {const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!")
// console.log(heading) //createElement creates an element, which has type : "h1", it has props:{ id: : "heading", children: "Hello World from React!"}
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);}

{
    /* <div id= "parent">
      <div id="child1">
          <h1>I'm h1 tag</h1>
          <h2>I'm h2 tag</h2>
      </div>
      <div id="child2">
          <h1>I'm h1 tag</h1>
          <h2>I'm h2 tag</h2>
      </div>
  </div> */
}

// const parent = React.createElement("div", {id: "parent"}, [
//     React.createElement("div", {id: "child1"}, [
//         React.createElement("h1",{},"I'm an h1 tag"),
//         React.createElement("h2",{},"I'm an h2 tag")
//     ]),
//     React.createElement("div", {id: "child2"}, [
//         React.createElement("h1",{},"I'm an h1 tag"),
//         React.createElement("h2",{},"I'm an h2 tag")
//     ])
// ])

// root.render(parent); // If anything is there in div root, that will be replaced
