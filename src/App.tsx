import { ThemeProvider } from "@emotion/react";
import { ConfigProvider } from "antd";
import * as React from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { BrowserRouter } from "react-router-dom";
import { useAppStore, usePageTabStore, useUserStore } from "stores";
import "styles/index.less";
import { themePalette } from "styles/theme";
import PageRoute from "router/PageRoute";
import StoreSpinner from "./components/StoreSpinner";

const App: React.FC = () => {
  const { switcher, themes } = useThemeSwitcher();
  const [storeLoaded, setStoreLoaded] = React.useState(false);
  const appStoreLoaded = useAppStore((s) => s.loaded);
  const setWidthHeight = useAppStore((s) => s.setWidthHeight);
  const pageStoreLoaded = usePageTabStore((s) => s.loaded);
  const userStoreLoaded = useUserStore((s) => s.loaded);
  const theme = useAppStore((s) => s.theme);

  React.useEffect(() => {
    switcher({ theme: theme === "dark" ? themes.dark : themes.light });
  }, [switcher, theme, themes.dark, themes.light]);

  React.useEffect(() => {
    if (appStoreLoaded && pageStoreLoaded && userStoreLoaded) {
      setTimeout(() => setStoreLoaded(true), 200);
    }
  }, [appStoreLoaded, pageStoreLoaded, userStoreLoaded]);

  const handleGetWindowSize = React.useCallback(() => {
    setWidthHeight(window.innerWidth, window.innerHeight);
  }, [setWidthHeight]);

  React.useEffect(() => {
    handleGetWindowSize();
    document.body.style.overscrollBehavior = "contain"; // prevent history move by wheel event
    window.addEventListener("resize", handleGetWindowSize);

    return () => {
      window.removeEventListener("resize", handleGetWindowSize);
    };
  }, [handleGetWindowSize]);

  return (
    <ThemeProvider theme={themePalette[theme]}>
      <StoreSpinner spinning={!storeLoaded} />
      <ConfigProvider>
        {storeLoaded && (
          <BrowserRouter>
            <PageRoute />
          </BrowserRouter>
        )}
      </ConfigProvider>
    </ThemeProvider>
  );
};

export default App;
