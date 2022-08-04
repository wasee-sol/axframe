import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";

const themes = {
  dark: `/app-dark.css`,
  light: `/app-light.css`,
};

const elem = document.getElementById("root");

if (!elem) {
  throw new Error("Template is invalid");
}

const root = createRoot(elem);

root.render(
  <ThemeSwitcherProvider themeMap={themes} defaultTheme='light'>
    <App />
  </ThemeSwitcherProvider>
);
