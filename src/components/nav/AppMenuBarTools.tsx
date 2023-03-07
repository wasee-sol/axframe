import styled from "@emotion/styled";
import * as React from "react";
import { useUserStore } from "stores";
import { SMixinFlexRow } from "@core/styles/emotion";
import { useDialog, useI18n } from "@core/hooks";
import { User } from "services";
import { IconLogout, IconUser } from "../icons";
import { Dropdown } from "antd";
import UserInfoDropdown from "./UserInfoDropdown";
import { IconText } from "../../@core/components/common";

interface StyleProps {
  sideMenuOpened?: boolean;
}
interface Props extends StyleProps {
  me?: User;
  onSignOut?: () => Promise<void>;
}

function AppMenuBarTools({}: Props) {
  const [signOutSpinning, setSignOutSpinning] = React.useState(false);
  const me = useUserStore((s) => s.me);
  const signOut = useUserStore((s) => s.signOut);
  const { errorDialog } = useDialog();
  const { t } = useI18n();
  const { userNm } = me ?? {};

  const handleClickSignOut = React.useCallback(async () => {
    setSignOutSpinning(true);
    try {
      await signOut();
    } catch (err) {
      await errorDialog(err);
    } finally {
      setSignOutSpinning(false);
    }
  }, [errorDialog, setSignOutSpinning, signOut]);

  return (
    <Container>
      <ToolBar>
        <Dropdown dropdownRender={() => <UserInfoDropdown onSignOut={handleClickSignOut} />}>
          <div role={"user-info"}>
            <IconText icon={<IconUser fontSize={18} />} block>
              <b>{userNm}</b>님
            </IconText>
          </div>
        </Dropdown>

        <div role={"logout"} onClick={handleClickSignOut}>
          <IconText icon={<IconLogout fontSize={20} />} loading={signOutSpinning}>
            {t.button.signOut}
          </IconText>
        </div>
      </ToolBar>
    </Container>
  );
}

const Container = styled.div<StyleProps>`
  flex: none;
  overflow: hidden;
  position: relative;
`;
const ToolBar = styled.div`
  height: 100%;
  border-radius: 4px;
  padding-left: 5px;
  ${SMixinFlexRow("stretch", "stretch")};
  overflow: hidden;
  font-size: 12px;

  [role="user-info"] {
    flex: 1;
    ${SMixinFlexRow("stretch", "center")};
    overflow: hidden;
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-right: 10px;
  }
  [role="logout"] {
    flex: none;
    ${SMixinFlexRow("center", "center")};
    color: #f01445;
    border-radius: 0 4px 4px 0;
    height: 100%;
    cursor: pointer;
    transition: all 0.3s;
    padding: 0 8px;
    &:hover {
      background: #eee;
    }
  }
`;

export default AppMenuBarTools;
