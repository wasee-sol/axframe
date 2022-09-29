import { useNavGroup } from "@hooks/nav/useNavGroup";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Dropdown, Menu } from "antd";
import { MenuProps } from "antd/lib/menu";
import { IconText } from "components/common";
import * as React from "react";
import { RFILanguage, RFISun, RFIMoon } from "react-frame-icon";
import { SMixinFlexColumn, SMixinFlexRow } from "styles/emotion";
import { mergeProps } from "utils/object";

interface Props {
  sideMenuOpened?: boolean;
}

const LanguageLabel = {
  en: "English",
  ko: "한국어",
};

function NavFooter(props: Props) {
  const { sideMenuOpened, currentLanguage, setLanguage, theme, setTheme } = mergeProps(props, useNavGroup());

  const handleChangeTheme = React.useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [setTheme, theme]);

  const onClickMenu: MenuProps["onClick"] = React.useCallback(
    (info) => {
      setLanguage(info.key);
    },
    [setLanguage]
  );

  return (
    <Container sideMenuOpened={sideMenuOpened}>
      <IconText
        icon={theme === "light" ? <RFIMoon /> : <RFISun />}
        iconSize={20}
        onClick={handleChangeTheme}
        role={"theme-selector"}
      />
      <Dropdown
        overlay={
          <Menu
            onClick={onClickMenu}
            items={[
              { key: "en", label: LanguageLabel.en },
              { key: "ko", label: LanguageLabel.ko },
            ]}
            selectedKeys={[currentLanguage]}
          />
        }
        trigger={["click"]}
      >
        <IconText icon={<RFILanguage />} iconSize={20} role={"lang-selector"}>
          {sideMenuOpened && LanguageLabel[currentLanguage]}
        </IconText>
      </Dropdown>
    </Container>
  );
}

const Container = styled.div<Props>`
  position: relative;
  height: 50px;

  [role="lang-selector"] {
    cursor: pointer;
    color: ${(p) => p.theme.link_color};

    &:hover {
      color: ${(p) => p.theme.link_hover_color};
    }

    &:active {
      color: ${(p) => p.theme.link_active_color};
    }
  }

  ${({ sideMenuOpened, theme }) => {
    if (sideMenuOpened) {
      return css`
        ${SMixinFlexRow("space-between", "center")};
        padding: 0 20px;
        font-size: 13px;
        gap: 10px;
        border-top: 1px solid ${theme.rf_border_color};
      `;
    }
    return css`
      ${SMixinFlexColumn("center", "center")};
      height: 90px;
      padding: 0;

      gap: 10px;

      [role="theme-selector"],
      [role="lang-selector"] {
        margin: 0 5px;
      }
    `;
  }}
`;

export default NavFooter;
