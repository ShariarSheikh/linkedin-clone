import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Feed from "./Feed";

const Main = () => {
  return (
    <>
      <Header />
      <div className="app_body">
        <Sidebar />
        <Feed />
      </div>
    </>
  );
};

export default Main;
