import * as React from "react";
import { useAppStore } from "stores";
import { Button } from "antd";
import PageFrame from "../components/PageFrame";

function Home() {
  const setTheme = useAppStore((s) => s.setTheme);

  return (
    <PageFrame>
      Hello World!!! <p>description</p>
      <button onClick={() => setTheme("light")}>light</button>
      <button onClick={() => setTheme("dark")}>dark</button>
      <Button type={"primary"}>ANTD Button</Button>
    </PageFrame>
  );
}

export default Home;
