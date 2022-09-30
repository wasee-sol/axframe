// ref
// https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less

import { alpha, lighten } from "./palette/colorUtil"; // Using relative path because the tsconfig isn't set at building less file
import DARK from "./palette/dark";
import LIGHT from "./palette/light";

const lightAntdColors = {
  body_background: LIGHT.INK_10,
  scroll_thumb_color: LIGHT.INK_50,
  border_color_base: LIGHT.INK_40,
  border_color_split: LIGHT.INK_30,
  primary_color: LIGHT.BLUE_50,
  primary_color_hover: LIGHT.BLUE_50,
  primary_color_active: LIGHT.BLUE_70,
  primary_color_outline: alpha(LIGHT.BLUE_50, 0.2),
  text_color: LIGHT.INK_70,
  error_color: LIGHT.RED_50,
  success_color: LIGHT.GREEN_50,
  info_color: LIGHT.BLUE_50,
  highlight_color: LIGHT.RED_50,
  disabled_color: alpha(LIGHT.INK_70, 0.5),
  disabled_bg: LIGHT.INK_30,
  warning_color: LIGHT.YELLOW_50,
  white_color: LIGHT.INK_5,
  black_color: "#000",
  label_color: LIGHT.INK_70,
  input_border_color: LIGHT.INK_40,
  select_border_color: LIGHT.INK_40,
  component_background: LIGHT.INK_5,
  item_active_bg: LIGHT.BLUE_5,
  item_hover_bg: LIGHT.INK_10,
  menu_item_active_bg: LIGHT.BLUE_5,
};
const lightCustomColors = {
  text_display_color: LIGHT.INK_100,
  text_heading_color: LIGHT.INK_90,
  text_sub_heading_color: LIGHT.INK_50,
  text_body_color: LIGHT.INK_70,
  text_sub_body_color: LIGHT.INK_40,
  link_color: LIGHT.INK_90,
  link_hover_color: lightAntdColors.primary_color,
  link_active_color: LIGHT.INK_100,
  header_background: LIGHT.INK_5,
  component_sub_background: LIGHT.INK_10,
  popover_background: LIGHT.INK_5,
  box_shadow_base: LIGHT.ELEVATION_03,
  form_box_bg: LIGHT.INK_5,
};
const lightColors = {
  ...lightAntdColors,
  ...lightCustomColors,

  // TabGroup
  rf_border_color: LIGHT.INK_30,
  rf_tabs_background: LIGHT.INK_20,
  rf_tabs_active_background: lightAntdColors.primary_color,
  rf_tabs_hover_background: LIGHT.INK_30,

  // DataGrid
  rfdg_header_bg: LIGHT.INK_10,
  rfdg_header_color: lightCustomColors.text_heading_color,
  rfdg_header_font_weight: 500,
  rfdg_header_hover_bg: LIGHT.INK_20,
  rfdg_header_group_bg: LIGHT.INK_20,
  rfdg_footer_bg: LIGHT.INK_10,
  rfdg_border_color_base: LIGHT.INK_40,
  rfdg_border_radius: "4px",
  rfdg_row_selector_color: lightAntdColors.component_background,
  rfdg_body_bg: lightAntdColors.component_background,
  rfdg_body_hover_bg: lightAntdColors.item_hover_bg,
  rfdg_body_color: lightCustomColors.text_body_color,
  rfdg_scroll_size: "11px",
  rfdg_scroll_track_bg: lighten(LIGHT.INK_10, 0.01),

  rfdg_scroll_thumb_radius: "6px",
  rfdg_scroll_thumb_bg: lightAntdColors.scroll_thumb_color,
  rfdg_scroll_thumb_hover_bg: LIGHT.INK_70,
  rfdg_loading_bg: alpha(LIGHT.INK_30, 0.5),
  rfdg_loading_color: alpha(LIGHT.INK_70, 0.1),
  rfdg_loading_second_color: LIGHT.INK_70,
};

// dark component colors
const darkAntdColors: typeof lightAntdColors = {
  body_background: DARK.INK_90,
  scroll_thumb_color: DARK.INK_100,
  border_color_base: DARK.INK_80,
  border_color_split: DARK.INK_80,
  primary_color: DARK.BLUE_50,
  primary_color_hover: DARK.BLUE_50,
  primary_color_active: DARK.BLUE_70,
  primary_color_outline: alpha(DARK.BLUE_50, 0.2),
  text_color: DARK.INK_5,
  error_color: DARK.RED_50,
  success_color: DARK.GREEN_50,
  info_color: DARK.BLUE_50,
  highlight_color: DARK.RED_50,
  disabled_color: alpha(DARK.INK_10, 0.5),
  disabled_bg: DARK.INK_80,
  warning_color: DARK.YELLOW_50,
  white_color: DARK.INK_5,
  black_color: "#000",
  label_color: DARK.INK_5,
  input_border_color: DARK.INK_80,
  select_border_color: DARK.INK_80,
  component_background: DARK.INK_90,
  item_active_bg: DARK.INK_100,
  item_hover_bg: DARK.INK_70,
  menu_item_active_bg: DARK.INK_100,
};
const darkCustomColors: typeof lightCustomColors = {
  text_display_color: DARK.INK_5,
  text_heading_color: DARK.INK_5,
  text_sub_heading_color: DARK.INK_10,
  text_body_color: DARK.INK_20,
  text_sub_body_color: DARK.INK_30,
  link_color: DARK.INK_5,
  link_hover_color: DARK.BLUE_50,
  link_active_color: DARK.INK_100,
  header_background: DARK.INK_100,
  component_sub_background: DARK.INK_90,
  popover_background: DARK.INK_5,

  box_shadow_base: DARK.ELEVATION_03,
  form_box_bg: DARK.INK_100,
};
const darkColors: typeof lightColors = {
  ...darkAntdColors,
  ...darkCustomColors,
  // TabGroup
  rf_border_color: DARK.INK_70,
  rf_tabs_background: DARK.BLUE_60,
  rf_tabs_active_background: DARK.BLUE_50,
  rf_tabs_hover_background: DARK.BLUE_70,

  // DataGrid
  rfdg_header_bg: DARK.INK_90,
  rfdg_header_color: darkCustomColors.text_heading_color,
  rfdg_header_font_weight: 500,
  rfdg_header_hover_bg: DARK.INK_80,
  rfdg_header_group_bg: DARK.INK_80,
  rfdg_footer_bg: DARK.INK_90,
  rfdg_border_color_base: DARK.INK_80,
  rfdg_border_radius: "4px",
  rfdg_row_selector_color: darkAntdColors.component_background,
  rfdg_body_bg: darkAntdColors.component_background,
  rfdg_body_hover_bg: darkAntdColors.item_hover_bg,
  rfdg_body_color: darkCustomColors.text_body_color,
  rfdg_scroll_size: "11px",
  rfdg_scroll_track_bg: DARK.INK_90,

  rfdg_scroll_thumb_radius: "6px",
  rfdg_scroll_thumb_bg: darkAntdColors.scroll_thumb_color,
  rfdg_scroll_thumb_hover_bg: DARK.INK_100,
  rfdg_loading_bg: alpha(DARK.INK_50, 0.5),
  rfdg_loading_color: alpha(DARK.INK_70, 0.1),
  rfdg_loading_second_color: DARK.INK_70,
};

const commons = {
  heading_font_family: "system-ui",
  border_radius_base: "4px",
  modal_header_height: "40px",

  active: LIGHT.BLUE_50,
  passed: LIGHT.BLUE_30,

  btn_font_size_sm: "13px",
  height_base: "32px",
  height_lg: "40px",
  height_sm: "28px",
  form_item_margin_bottom: "15px",
  error_page_header_color: "#FF4040",
  error_page_color: LIGHT.BLUE_90,
  form_vertical_label_padding: "0 0 4px",
  side_menu_open_width: 250,

  // custom styles
  ui_helper_zindex: 100,
  ui_drag_zindex: 500,
  ui_header_zindex: 900,
  ui_max_zindex: 9999,
};

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
