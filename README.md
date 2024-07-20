Episode 1
1.Hello world using html
2.Hello World using javascript
3.Hello World using React cdn
4.write React code in seprate file app.js
5.<div id=>
  <div>
      <h1></h1>

   </div>
</div>
6.
<div id=>
  <div>
     <h1></h1>
      <h2></h2>
     <h3></h3>
     <h4></h4>
   </div>
<div>
     <h1></h1>
      <h2></h2>
     <h3></h3>
     <h4></h4>
   </div>
</div>
7.const heading=React.createElement("div",{id:'parent'},
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
