import { ThemeProvider } from "@emotion/react";
import { DecoratorFunction } from "@storybook/addons";
import * as React from "react";

import "styles/index.less";
import "styles/less/app-light.less";
import { themePalette } from "../styles/theme";

export const GlobalDecorator: DecoratorFunction<React.ReactNode> = (storyFn) => {
  return <ThemeProvider theme={themePalette.light}>{storyFn()}</ThemeProvider>;
};
