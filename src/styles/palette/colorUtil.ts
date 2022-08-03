const Color = require('color');

function darken(color: string, amt: number = 0.2): string {
  return Color(color).darken(amt).hex();
}

function lighten(color: string, amt: number = 0.2): string {
  return Color(color).lighten(amt).hex();
}

function saturate(color: string, amt: number = 0.2): string {
  return Color(color).lighten(amt).hex();
}

function desaturate(color: string, amt: number = 0.2): string {
  return Color(color).lighten(amt).hex();
}

function grayscale(color: string): string {
  return Color(color).grayscale().hex();
}

function whiten(color: string, amt: number = 0.2): string {
  return Color(color).whiten(amt).hex();
}

function blacken(color: string, amt: number = 0.2): string {
  return Color(color).blacken(amt).hex();
}

function invert(color: string): string {
  return Color(color).negate().hex();
}

function isDark(color: string): boolean {
  return Color(color).isDark();
}

function opaquer(color: string, amt: number = -0.1): string {
  const _color: any = Color(color).opaquer(amt).rgb();
  return `rgba(${_color.color.join(', ')}, ${_color.valpha})`;
}

function alpha(color: string, amt: number = 0.2): string {
  const _color: any = Color(color).alpha(amt).rgb();
  return `rgba(${_color.color.join(', ')}, ${_color.valpha})`;
}

export {
  darken,
  lighten,
  saturate,
  desaturate,
  grayscale,
  whiten,
  blacken,
  invert,
  isDark,
  opaquer,
  alpha,
};
