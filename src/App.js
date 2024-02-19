import React from "react";
import Search from "./Search";
import Pagination from "./Pagination";
import Feed from "./Feed";
import "./App.css";
const App = () => {
  return (
    <>
      <Search />
      <Pagination/>
      <Feed />
      <Pagination />
    </>
  );
};

export default App;
