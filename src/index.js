import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Navbar />
    <SearchBar />
  </>
);
