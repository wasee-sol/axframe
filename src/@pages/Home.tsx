import * as React from "react";
import { useAppStore } from "stores";
import { Button } from "antd";
import PageFrameController from "../@controller/PageFrameController";

function Home() {
  const setTheme = useAppStore((s) => s.setTheme);

  return (
    <PageFrameController>
      Hello World!!! <p>description</p>
      <button onClick={() => setTheme("light")}>light</button>
      <button onClick={() => setTheme("dark")}>dark</button>
      <Button type={"primary"}>ANTD Button</Button>
    </PageFrameController>
  );
}

export default Home;
