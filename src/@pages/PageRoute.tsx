import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";

function PageRoute() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default PageRoute;
