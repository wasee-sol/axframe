import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "stores";
import { Button } from "antd";

function HomeController() {
  const setTheme = useAppStore((s) => s.setTheme);
  const setSideMenuOpened = useAppStore((s) => s.setSideMenuOpened);
  const navigate = useNavigate();

  return (
    <>
      Hello World!!! <p>description</p>
      <button onClick={() => setTheme("light")}>light</button>
      <button onClick={() => setTheme("dark")}>dark</button>
      <Button type={"primary"}>ANTD Button</Button>
      <Button
        type={"primary"}
        onClick={() => {
          navigate("/sign-in");
        }}
      >
        GO TO SIGN-IN
      </Button>
      <button onClick={() => setSideMenuOpened(true)}>왼쪽메뉴 열기</button>
      <button onClick={() => setSideMenuOpened(false)}>왼쪽메뉴 접기</button>
    </>
  );
}

export default HomeController;
