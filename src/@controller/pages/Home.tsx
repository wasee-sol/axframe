import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "stores";
import { Button } from "antd";
import FrameProgram from "@template/pageFrame/FrameProgram";

function Home() {
  const setTheme = useAppStore((s) => s.setTheme);
  const sideMenuOpened = useAppStore((s) => s.sideMenuOpened);
  const navigate = useNavigate();

  return (
    <FrameProgram sideMenuOpened={sideMenuOpened}>
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
    </FrameProgram>
  );
}

export default Home;
