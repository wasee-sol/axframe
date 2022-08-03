import * as React from "react";
import "styles/index.less";
import { useAppStore } from "stores";
import { ThemeProvider } from "@emotion/react";
import { ConfigProvider } from "antd";
import Home from "pages/Home";
import { themePalette } from "styles/theme";
import { AppContainer } from "styles/emotion";

const App: React.FC = () => {
  const loaded = useAppStore((s) => s.loaded);
  const theme = useAppStore((s) => s.theme);

  return (
    <ThemeProvider theme={themePalette[theme]}>
      <ConfigProvider>
        {loaded ? (
          <AppContainer>
            <Home />
          </AppContainer>
        ) : (
          <div>Loading...</div>
        )}
      </ConfigProvider>
    </ThemeProvider>
  );
};

export default App;
