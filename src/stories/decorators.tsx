import { ThemeProvider } from "@emotion/react";
import { DecoratorFunction } from "@storybook/addons";
import * as React from "react";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";

const themes = {
  dark: `/app-dark.css`,
  light: `/app-light.css`,
};

import "styles/index.less";
import { BrowserRouter } from "react-router-dom";
import { themePalette } from "../styles/theme";

export const GlobalDecorator: DecoratorFunction<React.ReactNode> = (storyFn, options) => {
  return (
    <ThemeSwitcherProvider themeMap={themes} defaultTheme={options.args.theme}>
      <ThemeProvider theme={themePalette[options.args.theme]}>
        <BrowserRouter>{storyFn()}</BrowserRouter>
      </ThemeProvider>
    </ThemeSwitcherProvider>
  );
};
