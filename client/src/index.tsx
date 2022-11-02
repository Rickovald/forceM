import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// import React, {createContext} from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import Store from "./stores/UserStore";

// export const store = Store;

// export const Context = createContext({
//     store,
// })

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );