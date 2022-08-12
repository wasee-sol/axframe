import HomeController from "@controller/pages/HomeController";
import SettingController from "@controller/pages/SettingController";
import SignInController from "@controller/pages/SignInController";
import FrameDefault from "@template/pageFrame/FrameDefault";
import FrameProgram from "@template/pageFrame/FrameProgram";
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { useAppStore } from "stores";
import ReportController from "../@controller/pages/ReportController";
import RequireAuth from "./RequireAuth";
import RestrictAuth from "./RestrictAuth";

function PageRoute() {
  const sideMenuOpened = useAppStore((s) => s.sideMenuOpened);

  return (
    <Routes>
      <Route
        element={
          <RequireAuth>
            <FrameProgram sideMenuOpened={sideMenuOpened} />
          </RequireAuth>
        }
      >
        <Route path='/' element={<HomeController />} />
        <Route path='/setting' element={<SettingController />} />
        <Route path='/report' element={<ReportController />} />
      </Route>
      <Route
        element={
          <RestrictAuth>
            <FrameDefault />
          </RestrictAuth>
        }
      >
        <Route path='/sign-in' element={<SignInController />} />
      </Route>
    </Routes>
  );
}

export default PageRoute;
