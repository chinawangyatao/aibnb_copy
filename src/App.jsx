import React from "react";
import { useRoutes } from "react-router-dom";
import routers from "./router";

const App = (props) => {
  return (
    <>
      <div className={"header"}></div>
      <div className={"pages"}>{useRoutes(routers)}</div>
      <div className={"footer"}></div>
    </>
  );
};

export default App;
