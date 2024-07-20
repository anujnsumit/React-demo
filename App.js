const heading=React.createElement("div",{id:'parent'},
[React.createElement("div",{id:'child1'},[
React.createElement("h1",{},"Hello World h1"),
React.createElement("h2",{},"Hello World h2"),
React.createElement("h3",{},"Hello World h3")
]),React.createElement("div",{id:'child2'},[
React.createElement("h1",{},"Hello World h1"),
React.createElement("h2",{},"Hello World h2"),
React.createElement("h3",{},"Hello World h3")
])]);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);