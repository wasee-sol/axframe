import * as React from "react";
import styled from "@emotion/styled";
import { SMixinFlexRow } from "../../styles/emotion";
import { css } from "@emotion/react";

export type AvatarSize = "small" | "medium" | "large";

interface StyleProps {
  size: AvatarSize;
}
interface Props extends StyleProps {
  userName?: string;
  profileImgUrl?: string;
}

const findIconLabel = (name: string): string => {
  if (name) {
    const letter = /[\p{L}\d]/gu.exec(name)?.[0];

    if (letter) {
      return /[a-z]/.test(letter) ? letter.toUpperCase() : letter;
    }
  }

  return "?";
};

function UserAvatar({ userName = "react frame", size = "medium" }: Props) {
  return (
    <UserAvatarContainer size={size}>
      <UserAvatarBox size={size}>{findIconLabel(userName)}</UserAvatarBox>
    </UserAvatarContainer>
  );
}

const UserAvatarContainer = styled.div<StyleProps>`
  padding: 2px;
  border-radius: 50%;
  position: relative;
  border: 2px solid ${(p) => p.theme.primary_color};

  ${({ size }) => {
    if (size === "small") {
      return css`
        width: 26px;
        height: 26px;
      `;
    }
    if (size === "large") {
      return css`
        width: 56px;
        height: 56px;
      `;
    }
    return css`
      width: 46px;
      height: 46px;
    `;
  }}
`;
const UserAvatarBox = styled.div<StyleProps>`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  ${SMixinFlexRow("center", "center")};
  font-weight: bold;
  background: ${(p) => p.theme.ink_30};
  color: ${(p) => p.theme.primary_color};

  ${({ size }) => {
    if (size === "small") {
      return css`
        font-size: 16px;
      `;
    }
    if (size === "large") {
      return css`
        font-size: 36px;
      `;
    }
    return css`
      font-size: 24px;
    `;
  }}
`;

export default UserAvatar;
