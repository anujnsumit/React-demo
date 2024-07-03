

// const element =React.createElement('div',{},React.createElement('div',{},
// [React.createElement('h1',{},"Hello World!"),React.createElement('h2',{},"Hello World heading2!")]
// ))

// const root = ReactDOM.createRoot(
//   document.getElementById('root')
// );
// root.render(element);

import React from "react";
import {createRoot} from 'react-dom/client';
import Home from "./page/Home";


const root=createRoot(document.getElementById("root"));
root.render(<Home/>);


