import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css"
import HomePage from "./components/HomePage"

let reactRoot = ReactDOM.createRoot(document.getElementById('root'));

reactRoot.render(<HomePage />);