import * as React from "react";
import { useAppStore } from "stores";

function HomeController() {
  const setTheme = useAppStore((s) => s.setTheme);
  const setSideMenuOpened = useAppStore((s) => s.setSideMenuOpened);

  return (
    <>
      Hello World!!! <p>description</p>
      <button onClick={() => setTheme("light")}>light</button>
      <button onClick={() => setTheme("dark")}>dark</button>
      <button onClick={() => setSideMenuOpened(true)}>왼쪽메뉴 열기</button>
      <button onClick={() => setSideMenuOpened(false)}>왼쪽메뉴 접기</button>
    </>
  );
}

export default HomeController;
