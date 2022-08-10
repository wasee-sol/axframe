import { ThemeProvider } from "@emotion/react";
import { ConfigProvider } from "antd";
import * as React from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { BrowserRouter } from "react-router-dom";
import { useAppStore } from "stores";
import { AppContainer } from "styles/emotion";
import "styles/index.less";
import { themePalette } from "styles/theme";
import PageRoute from "router/PageRoute";

const App: React.FC = () => {
  const { switcher, themes } = useThemeSwitcher();
  const loaded = useAppStore((s) => s.loaded);
  const theme = useAppStore((s) => s.theme);

  React.useEffect(() => {
    switcher({ theme: theme === "dark" ? themes.dark : themes.light });
  }, [switcher, theme, themes.dark, themes.light]);

  return (
    <ThemeProvider theme={themePalette[theme]}>
      <ConfigProvider>
        {loaded ? (
          <AppContainer>
            <BrowserRouter>
              <PageRoute />
            </BrowserRouter>
          </AppContainer>
        ) : (
          <div>
            Loading... loaded: {loaded}, theme: {theme}
          </div>
        )}
      </ConfigProvider>
    </ThemeProvider>
  );
};

export default App;
