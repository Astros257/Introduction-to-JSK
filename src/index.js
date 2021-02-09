var React = require("react");
var ReactDom = require("react-dom");

//takes 3 inputs last one is optional
/*
first part is the html code we want to show
second part is where in teh html file we want to insert that code to show
 */
ReactDom.render(<h1>Hello world</h1>, document.getElementById("root"))