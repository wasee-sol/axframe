import * as React from "react";
import { PageLayout } from "styles/emotion";
import { useAppStore } from "stores";

function Home() {
  const setTheme = useAppStore((s) => s.setTheme);

  return (
    <PageLayout>
      <PageLayout.Content>
        <div>
          Hello World!!! <p>description</p>
          <button onClick={() => setTheme("light")}>light</button>
          <button onClick={() => setTheme("dark")}>dark</button>
        </div>
      </PageLayout.Content>
    </PageLayout>
  );
}

export default Home;
