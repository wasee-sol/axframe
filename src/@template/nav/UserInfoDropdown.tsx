import * as React from "react";
import styled from "@emotion/styled";
import { SMixinFlexColumn } from "../../styles/emotion";

interface Props {}

function UserInfoDropdown(props: Props) {
  return <UserInfoDropdownContainer>UserInfoDropdown</UserInfoDropdownContainer>;
}

const UserInfoDropdownContainer = styled.div`
  ${SMixinFlexColumn("stretch", "center")};
  border-radius: 5px;
  padding: 15px 0;
  gap: 15px;
  background: ${(p) => p.theme.popover_background};
  box-shadow: ${(p) => p.theme.box_shadow_base};
`;

export default UserInfoDropdown;
