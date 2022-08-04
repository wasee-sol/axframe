import * as React from "react";
import { PageLayout } from "styles/emotion";
import { useAppStore } from "stores";
import { Button } from "antd";

function Home() {
  const setTheme = useAppStore((s) => s.setTheme);

  return (
    <PageLayout>
      <PageLayout.Content>
        <div>
          Hello World!!! <p>description</p>
          <button onClick={() => setTheme("light")}>light</button>
          <button onClick={() => setTheme("dark")}>dark</button>
          <Button>ANTD Button</Button>
        </div>
      </PageLayout.Content>
    </PageLayout>
  );
}

export default Home;
