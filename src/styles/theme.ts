// ref
// https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less

import { alpha } from "./palette/colorUtil"; // Using relative path because the tsconfig isn't set at building less file
import DARK from "./palette/dark";
import LIGHT from "./palette/light";

// const transparent = "transparent";

const lightColors = {
  // antd colors
  body_background: LIGHT.INK_10,
  scroll_thumb_color: LIGHT.INK_30,
  border_color_base: LIGHT.INK_40,
  border_color_split: LIGHT.INK_30,
  primary_color: LIGHT.BLUE_50,
  text_color: LIGHT.INK_70,
  error_color: LIGHT.RED_50,
  success_color: LIGHT.GREEN_50,
  info_color: LIGHT.BLUE_50,
  highlight_color: LIGHT.RED_50,
  disabled_color: alpha(LIGHT.INK_70, 0.5),
  warning_color: LIGHT.YELLOW_50,
  white_color: LIGHT.INK_5,
  black_color: "#000",
  label_color: LIGHT.INK_70,
  input_border_color: LIGHT.INK_40,
  select_border_color: LIGHT.INK_40,

  // custom colors
  text_display_color: LIGHT.INK_100,
  text_heading_color: LIGHT.INK_90,
  text_sub_heading_color: LIGHT.INK_50,
  text_body_color: LIGHT.INK_70,
  text_sub_body_color: LIGHT.INK_40,
  link_color: LIGHT.INK_90,
  link_hover_color: LIGHT.BLUE_50,
  link_active_color: LIGHT.INK_100,
  header_background: LIGHT.INK_5,
  component_background: LIGHT.INK_5,
  component_sub_background: LIGHT.INK_10,
  popover_background: LIGHT.INK_5,

  box_shadow_base: LIGHT.ELEVATION_03,

  // TabGroup
  rf_border_color: LIGHT.INK_30,
  rf_tabs_background: LIGHT.INK_20,
  rf_tabs_active_background: LIGHT.BLUE_50,
  rf_tabs_hover_background: LIGHT.INK_30,
};

// dark component colors
const darkColors: typeof lightColors = {
  // antd colors
  body_background: DARK.INK_70,
  scroll_thumb_color: DARK.INK_30,
  border_color_base: DARK.INK_30,
  border_color_split: DARK.INK_30,
  primary_color: DARK.BLUE_70,
  text_color: DARK.INK_5,
  error_color: DARK.RED_50,
  success_color: DARK.GREEN_50,
  info_color: DARK.BLUE_50,
  highlight_color: DARK.RED_50,
  disabled_color: alpha(DARK.INK_70, 0.5),
  warning_color: DARK.YELLOW_50,
  white_color: DARK.INK_5,
  black_color: "#000",
  label_color: DARK.INK_80,
  input_border_color: DARK.INK_40,
  select_border_color: DARK.INK_40,

  // custom colors
  text_display_color: LIGHT.INK_100,
  text_heading_color: LIGHT.INK_90,
  text_sub_heading_color: LIGHT.INK_50,
  text_body_color: LIGHT.INK_70,
  text_sub_body_color: LIGHT.INK_30,
  link_color: LIGHT.INK_90,
  link_hover_color: LIGHT.BLUE_50,
  link_active_color: LIGHT.INK_100,
  header_background: DARK.INK_100,
  component_background: DARK.INK_100,
  component_sub_background: DARK.INK_80,
  popover_background: DARK.INK_5,

  box_shadow_base: DARK.ELEVATION_03,

  // TabGroup
  rf_border_color: LIGHT.INK_30,
  rf_tabs_background: DARK.INK_20,
  rf_tabs_active_background: DARK.BLUE_50,
  rf_tabs_hover_background: DARK.INK_30,
};

const commons = {
  heading_font_family: "system-ui",
  border_radius_base: "4px",
  modal_header_height: "40px",

  ui_helper_zindex: 100,
  ui_drag_zindex: 500,
  ui_header_zindex: 900,
  ui_max_zindex: 9999,

  active: LIGHT.BLUE_50,
  passed: LIGHT.BLUE_30,

  // antd styles
  height_base: "36px",
  height_sm: "28px",
  form_item_margin_bottom: "15px",
  error_page_header_color: "#FF4040",
  error_page_color: LIGHT.BLUE_90,
  form_vertical_label_padding: "0 0 4px",
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
