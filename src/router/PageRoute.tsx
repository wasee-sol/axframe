import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@controller/pages/Home";
import SignIn from "@controller/pages/SignIn";

function PageRoute() {
  return (
    <Routes>
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default PageRoute;
