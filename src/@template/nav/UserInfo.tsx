import { css } from "@emotion/react";
import styled from "@emotion/styled";
import UserAvatar from "@template/user/UserAvatar";
import { Dropdown, Popover } from "antd";
import * as React from "react";
import { RFIMoreVertical } from "react-frame-icon";
import { SMixinFlexRow } from "styles/emotion";
import { useNavGroupController } from "../../@controller/nav/NavGroupController";
import UserInfoDropdown from "./UserInfoDropdown";

interface StyleProps {
  opened?: boolean;
}
interface Props extends StyleProps {}

function UserInfo({ opened: _opened }: Props) {
  const { me, handleSignOut: onSignOut, sideMenuOpened } = useNavGroupController();
  const opened = _opened ?? sideMenuOpened;
  const { name, jobTitle } = me ?? {};
  return (
    <UserInfoContainer opened={opened}>
      <UserInfoBox opened={opened}>
        {opened ? (
          <>
            <UserAvatar size={"medium"} userName={name} role='avatar' />
            <UserCard>
              <span role='name'>{name}</span>
              <span role='job-title'>{jobTitle}</span>
            </UserCard>
            <Dropdown
              overlay={<UserInfoDropdown onSignOut={onSignOut} />}
              trigger={["click"]}
              placement={"bottomRight"}
            >
              <DownDownHandle>
                <RFIMoreVertical />
              </DownDownHandle>
            </Dropdown>
          </>
        ) : (
          <>
            <Popover
              content={<UserInfoDropdown onSignOut={onSignOut} asPopover />}
              placement={"rightTop"}
              align={{ targetOffset: [0, 8] }}
            >
              <div>
                <UserAvatar size={"small"} userName={name} role='avatar' />
              </div>
            </Popover>
          </>
        )}
      </UserInfoBox>
    </UserInfoContainer>
  );
}

const UserInfoContainer = styled.div<StyleProps>`
  flex: none;

  [role="avatar"] {
    flex: none;
  }

  ${({ opened }) => {
    if (opened) {
      return css`
        padding: 28px 28px 0 28px;
      `;
    }
    return css`
      padding: 20px 0;
    `;
  }}
`;
const UserInfoBox = styled.div<StyleProps>`
  ${SMixinFlexRow("stretch", "center")};
  column-gap: 20px;
  ${({ opened, theme }) => {
    if (opened) {
      return css`
        ${SMixinFlexRow("stretch", "center")};
        border-bottom: 1px solid ${theme.border_color_base};
        padding-bottom: 32px;
      `;
    }
    return css`
      ${SMixinFlexRow("center", "center")};
      [role="avatar"] {
        cursor: pointer;
      }
    `;
  }}
`;
const UserCard = styled.div`
  flex: 1;
  font-weight: bold;
  line-height: 1.3;
  [role="name"] {
    display: block;
    color: ${(p) => p.theme.text_heading_color};
    font-size: 13px;
    margin-bottom: 2px;
  }
  [role="job-title"] {
    font-size: 11px;
    color: ${(p) => p.theme.text_sub_body_color};
  }
`;
const DownDownHandle = styled.div`
  ${SMixinFlexRow("center", "center")};
  cursor: pointer;
  flex: none;
  font-size: 24px;
  color: ${(p) => p.theme.primary_color};
`;

export default UserInfo;
