// ref
// https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less

import { alpha } from "./palette/colorUtil"; // Using relative path because the tsconfig isn't set at building less file
import DARK from "./palette/dark";
import LIGHT from "./palette/light";

const transparent = "transparent";

const lightColors = {
  body_background: LIGHT.INK_7,
  scroll_thumb_color: LIGHT.INK_20,
  border_color_base: LIGHT.INK_20,
  border_color_split: LIGHT.INK_20,
  primary_color: LIGHT.BLUE_60,
  text_color: LIGHT.INK_70,
  error_color: LIGHT.RED_50,
  success_color: LIGHT.GREEN_50,
  info_color: LIGHT.BLUE_50,
  highlight_color: LIGHT.RED_50,
  disabled_color: alpha(LIGHT.INK_70, 0.5),
  warning_color: LIGHT.YELLOW_50,
  white_color: LIGHT.INK_5,
  black_color: "#000",
  heading_color: LIGHT.INK_100,

  //custom colors
  header_background: LIGHT.INK_5,
};

// dark component colors
const darkColors: typeof lightColors = {
  body_background: DARK.INK_60,
  scroll_thumb_color: DARK.INK_30,
  border_color_base: DARK.INK_30,
  border_color_split: DARK.INK_30,
  primary_color: DARK.BLUE_60,
  text_color: DARK.INK_5,
  error_color: DARK.RED_50,
  success_color: DARK.GREEN_50,
  info_color: DARK.BLUE_50,
  highlight_color: DARK.RED_50,
  disabled_color: alpha(DARK.INK_70, 0.5),
  warning_color: DARK.YELLOW_50,
  white_color: DARK.INK_5,
  black_color: "#000",
  heading_color: DARK.INK_5,

  //custom colors
  header_background: DARK.INK_100,
};

const commons = {
  heading_font_family: "system-ui",

  border_radius_base: "2px",

  modal_header_height: "40px",

  ui_helper_zindex: 100,
  ui_drag_zindex: 500,
  ui_header_zindex: 900,
  ui_max_zindex: 9999,

  brand_5: LIGHT.BLUE_5,
  brand_7: LIGHT.BLUE_7,
  brand_10: LIGHT.BLUE_10,
  brand_20: LIGHT.BLUE_20,
  brand_30: LIGHT.BLUE_30,
  brand_40: LIGHT.BLUE_40,
  brand_50: LIGHT.BLUE_50,
  brand_60: LIGHT.BLUE_60,
  brand_70: LIGHT.BLUE_70,
  brand_80: LIGHT.BLUE_80,
  brand_90: LIGHT.BLUE_90,
  brand_100: LIGHT.BLUE_100,
  brand_a10: LIGHT.BLUE_A10,

  ink_5: LIGHT.INK_5,
  ink_7: LIGHT.INK_7,
  ink_10: LIGHT.INK_10,
  ink_20: LIGHT.INK_20,
  ink_30: LIGHT.INK_30,
  ink_40: LIGHT.INK_40,
  ink_50: LIGHT.INK_50,
  ink_60: LIGHT.INK_60,
  ink_70: LIGHT.INK_70,
  ink_80: LIGHT.INK_80,
  ink_90: LIGHT.INK_90,
  ink_100: LIGHT.INK_100,

  active: LIGHT.BLUE_50,
  passed: LIGHT.BLUE_30,

  // antd styles
  error_page_header_color: "#FF4040",
  error_page_color: LIGHT.BLUE_90,

  text_color_hover: LIGHT.INK_100,
  text_color_active: LIGHT.INK_100,
  text_color_secondary: LIGHT.INK_70,
  text_color_secondary_hover: LIGHT.INK_100,
  text_color_secondary_active: LIGHT.INK_100,

  label_color: LIGHT.INK_100,
  title_color: LIGHT.INK_100,
  component_background: LIGHT.INK_5,
  popover_bg: LIGHT.INK_5,

  item_hover_bg: LIGHT.BLUE_7,
  item_hover_color: LIGHT.BLUE_50,
  item_active_bg: LIGHT.BLUE_A10,
  item_active_color: LIGHT.BLUE_80,
  item_selected_bg: LIGHT.BLUE_5,
  item_disabled_bg: LIGHT.INK_10,
};
//~

const light = {
  themeType: "LIGHT",
  ...lightColors,
  ...commons,
};

const dark = {
  themeType: "DARK",
  ...darkColors,
  ...commons,
};

export const themePalette = {
  light,
  dark,
};

export type Theme = typeof dark;
export type ThemeType = keyof typeof themePalette;

export default light;
