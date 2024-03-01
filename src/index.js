import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import AddProject from "./components/AddProject";
// import About from "./components/About";
// import Navbar from "./components/Navbar";
// import Vote from "./vote";

// import Nomination from "./components/Nomination";
// import User from "./user";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Navbar />
    <About />
    <Vote />
    <Nomination />
    <AddProject />
    <User /> */}
  </React.StrictMode>
);
