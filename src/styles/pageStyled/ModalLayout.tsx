import { css } from "@emotion/react";
import React from "react";
import styled from "@emotion/styled";
import { SMixinFlexRow, SMixinFlexColumn } from "@core/styles/emotion/mixins";

interface Props {
  id?: string;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  role?: string;
  stretch?: boolean;
}

const ModalLayoutContainer = styled.div<Props>`
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

interface ModalHeaderProps {
  title: React.ReactNode;
  children?: React.ReactNode;
}

function ModalHeader(props: ModalHeaderProps) {
  return (
    <HeaderContainer>
      <div role={"modal-header-title"}>{props.title}</div>
      <div role={"modal-header-addon"}>{props.children}</div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  ${SMixinFlexRow("stretch", "center")};
  height: 54px;
  border-bottom: 1px solid ${(p) => p.theme.border_color_split};
  padding: 0 50px 0 20px;

  [role="modal-header-title"] {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight: 600;
    color: ${(p) => p.theme.text_heading_color};
  }

  [role="modal-header-addon"] {
    flex: none;
  }
`;

const ModalBody = styled.div`
  flex: 1;
  padding: 20px;
  min-height: 400px;
`;

const ModalFooter = styled.div<{ compact?: boolean }>`
  ${SMixinFlexRow("flex-end", "center")};
  // border-top: 1px solid ${(p) => p.theme.border_color_split};
  padding: 15px 20px;
  background-color: ${(p) => p.theme.body_background};

  gap: 6px;

  ${({ compact }) => {
    if (!compact) {
      return css`
        margin: 15px 0;
      `;
    }
  }};
`;

export class ModalLayout extends React.Component<Props> {
  public static Header = ModalHeader;
  public static Body = ModalBody;
  public static Footer = ModalFooter;

  public render(): React.ReactElement {
    const { children, ...restProps } = this.props;
    return <ModalLayoutContainer {...restProps}>{children}</ModalLayoutContainer>;
  }
}
