import { css } from "@emotion/react";
import React from "react";
import styled from "@emotion/styled";
import { SMixinFlexRow, SMixinFlexColumn } from "styles/emotion/mixins";

interface Props {
  id?: string;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  role?: string;
  stretch?: boolean;
}

type HeaderSize = "small" | "medium" | "large";

const PageLayoutContainer = styled.div<Props>`
  ${({ stretch }) => {
    if (stretch) {
      return css`
        flex: 1;
        ${SMixinFlexColumn("stretch", "stretch")};
      `;
    }

    return;
  }}
`;

const PageHeader = styled.div`
  ${SMixinFlexRow("space-between", "center")};

  font-weight: 600;
  color: ${(p) => p.theme.text_heading_color};
  margin: 0 0 15px 0;
  font-size: 1.6em;
`;

const PageBody = styled.div`
  flex: 1;
`;

const PageFormBoxHeader = styled.div<{ size?: HeaderSize }>`
  ${SMixinFlexRow("space-between", "center")};
  font-weight: 600;
  color: ${(p) => p.theme.text_heading_color};
  margin: 20px 0 10px 0;

  ${({ size = "medium" }) => {
    if (size === "small") {
      return css`
        font-size: 1em;
      `;
    }
    if (size === "medium") {
      return css`
        font-size: 1.1em;
      `;
    }
    if (size === "large") {
      return css`
        font-size: 1.4em;
      `;
    }
    return css``;
  }}
`;

const PageFormBox = styled.div<{ level?: 1 | 2 | 3 }>`
  ${({ level = 1, theme }) => {
    if (level === 1) {
      return css`
        background: ${theme.form_box_bg};
        border: 1px solid ${theme.axf_border_color};
        border-radius: 4px;
        padding: 20px;

        > * {
          max-width: 960px;
        }
      `;
    }
    if (level === 2) {
      return css`
        background: ${theme.component_sub_background};
        border: 1px solid ${theme.axf_border_color};
        border-radius: 4px;
        padding: 10px 20px;
        margin: 0 0 15px;

        > * {
          max-width: 960px;
        }
      `;
    }
    return css``;
  }}
`;

const PageFormGroupTitle = styled.div`
  margin-bottom: 5px;
  color: ${(p) => p.theme.text_heading_color};
  font-weight: bold;
  font-size: 1.1em;
`;

const ButtonGroup = styled.div<{ compact?: boolean }>`
  ${SMixinFlexRow("flex-start", "center")};
  gap: 6px;

  ${({ compact }) => {
    if (!compact) {
      return css`
        margin: 15px 0;
      `;
    }
  }};
`;

export class PageLayout extends React.Component<Props> {
  public static Header = PageHeader;
  public static Body = PageBody;
  public static FormBoxHeader = PageFormBoxHeader;
  public static FormBox = PageFormBox;
  public static FormGroupTitle = PageFormGroupTitle;
  public static ButtonGroup = ButtonGroup;

  public render(): React.ReactElement {
    const { children, ...restProps } = this.props;
    return <PageLayoutContainer {...restProps}>{children}</PageLayoutContainer>;
  }
}
