import * as React from "react";
import styled from "@emotion/styled";
import { SMixinFlexRow } from "./mixins";

interface IProps {
  id?: string;
  stretch?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Container = styled.div`
  ${SMixinFlexRow("stretch", "stretch")};
  flex: 1;
  overflow: hidden;
  &.layout-stretch {
  }
`;

const Nav = styled.div`
  flex: none;
  width: 215px;
  ${SMixinFlexRow("stretch", "stretch")};
  border-right: 1px solid ${(p) => p.theme.border_color_base};
  position: relative;
`;

const ContentSet = styled.div`
  ${SMixinFlexRow("stretch", "stretch")};
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
`;

const Content = styled.div<{ stretch?: boolean }>`
  background: ${(p) => p.theme.body_background};
  ${SMixinFlexRow("stretch", "stretch")};
  flex: 1;
  user-select: text;
  overflow: hidden;

  &::-webkit-scrollbar-thumb {
    border: 2px solid ${(p) => p.theme.setting_content_bg};
    background: ${(p) => p.theme.scroll_thumb_color};
    border-radius: 6px;
  }
`;

class PageLayout extends React.Component<IProps> {
  public static ContentSet = ContentSet;
  public static Content = Content;
  public static Nav = Nav;
  public render(): React.ReactElement {
    const { children, stretch, ...restProps } = this.props;
    return <Container {...restProps}>{children}</Container>;
  }
}

export default PageLayout;
