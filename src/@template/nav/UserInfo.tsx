import { css } from "@emotion/react";
import styled from "@emotion/styled";
import UserAvatar from "@template/user/UserAvatar";
import { Dropdown, Popover } from "antd";
import * as React from "react";
import { RFIMoreVertical } from "react-frame-icon";
import { Member } from "stores";
import { SMixinFlexRow } from "../../styles/emotion";
import UserInfoDropdown from "./UserInfoDropdown";

interface StyleProps {
  opened: boolean;
}
interface Props extends StyleProps {
  me: Member;
}

function UserInfo({ opened, me }: Props) {
  const { name, email, jobTitle } = me;
  return (
    <UserInfoContainer opened={opened}>
      <UserAvatar size={"medium"} userName={name} role='avatar' />
      {opened && (
        <>
          <UserCard>
            <span role='name'>{name}</span>
            <span role='job-title'>{jobTitle}</span>
          </UserCard>
          <Dropdown overlay={<UserInfoDropdown />} trigger={["click"]} placement={"bottomRight"}>
            <DownDownHandle>
              <RFIMoreVertical />
            </DownDownHandle>
          </Dropdown>
        </>
      )}
    </UserInfoContainer>
  );
}

const UserInfoContainer = styled.div<StyleProps>`
  flex: 1;
  ${SMixinFlexRow("stretch", "center")};
  column-gap: 20px;
  [role="avatar"] {
    flex: none;
  }

  ${({ opened }) => {
    if (opened) {
      return css`
        ${SMixinFlexRow("stretch", "center")};
      `;
    }
    return css`
      ${SMixinFlexRow("center", "center")};
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
    font-size: 12px;
    margin-bottom: 4px;
  }
  [role="job-title"] {
    font-size: 12px;
    color: ${(p) => p.theme.text_sub_body_color};
  }
`;
const DownDownHandle = styled.div`
  cursor: pointer;
  flex: none;
  font-size: 24px;
  color: ${(p) => p.theme.primary_color};
`;

export default UserInfo;
