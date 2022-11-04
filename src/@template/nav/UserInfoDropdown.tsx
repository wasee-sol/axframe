import { css } from "@emotion/react";
import styled from "@emotion/styled";
import * as React from "react";
import { AXFIArrowLogOut } from "@axframe/icon";
import { useNavGroup } from "@hooks/nav/useNavGroup";
import { SMixinFlexColumn } from "styles/emotion";
import { mergeProps } from "utils/object";
import { IconText, LabelText } from "components/common";

interface StyleProps {
  asPopover?: boolean;
}

interface Props extends StyleProps {
  onSignOut?: () => Promise<void>;
}

function UserInfoDropdown(props: Props) {
  const { handleSignOut, asPopover, signOutSpinning, setSignOutSpinning } = mergeProps(props, useNavGroup());
  const handleClickSignOut = React.useCallback(async () => {
    setSignOutSpinning(true);
    await handleSignOut?.();
    setSignOutSpinning(false);
  }, [handleSignOut, setSignOutSpinning]);

  return (
    <UserInfoDropdownContainer asPopover={asPopover}>
      <LabelText role={"info"} label='User Name'>
        Thomas Jang
      </LabelText>
      <LabelText role={"info"} label='E-Mail'>
        tom@axisj.com
      </LabelText>
      <LabelText role={"info"} label='Job Title'>
        Software Engineer
      </LabelText>
      <CustomDivider />
      <CustomMenus>
        <IconText
          icon={<AXFIArrowLogOut />}
          iconSize={"15px"}
          onClick={handleClickSignOut}
          block
          loading={signOutSpinning}
        >
          Sign Out
        </IconText>
      </CustomMenus>
    </UserInfoDropdownContainer>
  );
}

const UserInfoDropdownContainer = styled.div<StyleProps>`
  ${SMixinFlexColumn("stretch", "stretch")};
  border-radius: 5px;
  padding: 15px 0 15px 0;
  gap: 15px;

  ${({ asPopover, theme }) => {
    if (asPopover) {
      return css``;
    }
    return css`
      background: ${theme.popover_background};
      box-shadow: ${theme.box_shadow_base};
    `;
  }}
  font-size: 12px;

  [role="info"] {
    padding: 0 20px;
  }
`;

const CustomDivider = styled.div`
  height: 1px;
  width: 100%;
  clear: both;
  background: ${(p) => p.theme.axf_border_color};
`;

const CustomMenus = styled.div`
  padding: 0 20px;
`;

export default UserInfoDropdown;
