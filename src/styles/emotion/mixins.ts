import * as React from "react";
import { css } from "@emotion/css";

type FlexDirection = React.CSSProperties["flexDirection"];
type FlexWrap = React.CSSProperties["flexWrap"];
type JustifyContent = React.CSSProperties["justifyContent"];
type JustifyItems = React.CSSProperties["justifyItems"];
type AlignItems = React.CSSProperties["alignItems"];
type AlignContent = React.CSSProperties["alignContent"];
type PlaceItems = React.CSSProperties["placeItems"];
type PlaceContent = React.CSSProperties["placeContent"];
type Gap = React.CSSProperties["gap"];

export interface ISMixinFlex {
  direction?: FlexDirection;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  flexWrap?: FlexWrap;
}

export const SMixinFlex = ({
  direction = "row",
  justifyContent = "stretch",
  alignItems = "center",
  flexWrap = "nowrap",
}: ISMixinFlex = {}) => css`
  display: flex;
  flex-wrap: ${flexWrap};
  flex-direction: ${direction};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;

export const SMixinFlexRow = (
  justifyContent: JustifyContent = "stretch",
  alignItems: AlignItems = "center",
  flexWrap: FlexWrap = "nowrap"
) => SMixinFlex({ direction: "row", justifyContent, alignItems, flexWrap });

export const SMixinFlexColumn = (
  justifyContent: JustifyContent = "stretch",
  alignItems: AlignItems = "center",
  flexWrap: FlexWrap = "nowrap"
) => SMixinFlex({ direction: "column", justifyContent, alignItems, flexWrap });

//

export type LengthUnit = "em" | "rem" | "vw" | "vh" | "vmin" | "vmax" | "px" | "fr";
export type Length = `${number}${LengthUnit}` | "auto" | "max-content" | "min-content" | number;
export type GridColumnWidthsManual = {
  columnWidths?: Length[];
  repeat?: never;
};
export type GridColumnWidthsAuto = {
  columnWidths: Length | { min: Length; max?: Length };
  repeat?: "fill" | "fit";
};
export type GridColumnWidthsRepeat = {
  columnWidths: Length;
  repeat?: number;
};
export type GridCommonProps = {
  gap?: Gap | [Gap, Gap];
  justifyContent?: JustifyContent;
  justifyItems?: JustifyItems;
  alignContent?: AlignContent;
  alignItems?: AlignItems;
  placeContent?: PlaceContent;
  placeItems?: PlaceItems;
};

export type ISMixinGrid = GridCommonProps & (GridColumnWidthsManual | GridColumnWidthsAuto | GridColumnWidthsRepeat);

function attachPx<T extends ISMixinGrid["columnWidths"] | ISMixinGrid["gap"]>(v: T) {
  switch (typeof v) {
    case "number":
      return `${v}px`;
    case "string":
      return !Number.isNaN(Number(v)) ? `${v}px` : v;
    case "object":
      return Array.isArray(v) ? v.map((t) => attachPx(t)) : { min: attachPx(v.min), max: attachPx(v.max) };
    default:
      return v;
  }
}

export const SMixinGrid = ({
  columnWidths = ["1fr"],
  repeat = Array.isArray(columnWidths) ? undefined : "fill",
  gap = 20,
  alignContent = "start",
  alignItems,
  justifyContent,
  justifyItems,
  placeContent,
  placeItems,
}: ISMixinGrid = {}) => {
  const w = attachPx(columnWidths);
  const r = typeof repeat === "number" ? repeat : `auto-${repeat}`;

  const gridTemplatePhrase = Array.isArray(w)
    ? `${w.join(" ")}`
    : typeof w === "object"
    ? css`repeat(${r}, minmax(${w.min}, ${w.max ?? "1fr"}))`
    : css`repeat(${r}, minmax(auto, ${w}))`;

  const gapPhrase: string = Array.isArray(gap) ? attachPx(gap).join(" ") : attachPx(gap);

  return css`
    display: grid;
    gap: ${gapPhrase};
    grid-template-columns: ${gridTemplatePhrase};

    ${css({
      justifyContent,
      justifyItems,
      alignContent,
      alignItems,
      placeContent,
      placeItems,
    })}
  `;
};

export const SMixinEllipsis = () => css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
