import React from "react";
import { Outlet } from "react-router-dom";
import "../App.css";
import Sidebarnominate from "../components/Sidebarnominate";
import Navbar from "../components/Navbar";
import Nomination from "../components/Nomination";

function Votepage() {
  return (
    <div className="flex">

      <Nomination />
      <Outlet />
    </div>
  );
}
export default Votepage;
