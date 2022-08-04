import * as React from "react";
import "styles/index.less";
import { useAppStore } from "stores";
import { ThemeProvider } from "@emotion/react";
import { ConfigProvider } from "antd";
import Home from "pages/Home";
import { themePalette } from "styles/theme";
import { AppContainer } from "styles/emotion";
import { useThemeSwitcher } from "react-css-theme-switcher";

const App: React.FC = () => {
  const { switcher, currentTheme, status, themes } = useThemeSwitcher();

  const loaded = useAppStore((s) => s.loaded);
  const theme = useAppStore((s) => s.theme);

  React.useEffect(() => {
    switcher({ theme: theme === "dark" ? themes.dark : themes.light });
  }, [theme]);

  return (
    <ThemeProvider theme={themePalette[theme]}>
      <ConfigProvider>
        {loaded ? (
          <AppContainer>
            <Home />
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
