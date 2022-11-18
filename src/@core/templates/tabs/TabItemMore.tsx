import { css } from "@emotion/react";
import { Dropdown, Menu } from "antd";
import * as React from "react";
import styled from "@emotion/styled";
import { AXFIArrowDown } from "@axframe/icon";
import { SMixinFlexRow } from "@core/styles/emotion";
import { useTabGroup } from "@core/templateStores/tabs/useTabGroup";
import { mergeProps } from "@core/utils/object";
import { alpha } from "styles/palette/colorUtil";

interface StyleProps {
  visible?: boolean;
}

interface Props extends StyleProps {}

function TabItemMore(props: Props) {
  const { currentLanguage, tabItemList, handleClickTab } = mergeProps(props, useTabGroup());
  const [visible, setVisible] = React.useState(false);

  return (
    <Dropdown
      overlayClassName={"tab-item-more-dropdown"}
      overlay={
        <Menu
          items={tabItemList.map((tabItem) => ({
            key: tabItem.id,
            label: (
              <div
                onClick={() => {
                  handleClickTab(tabItem.id, tabItem.page.path);
                }}
              >
                {tabItem.page.labels?.[currentLanguage]}
              </div>
            ),
          }))}
        />
      }
      trigger={["click"]}
      align={{ targetOffset: [-5, 0] }}
      open={visible}
      onOpenChange={(visible) => setVisible(visible)}
    >
      <TabItemMoreContainer visible={visible}>
        <AXFIArrowDown fontSize={18} />
      </TabItemMoreContainer>
    </Dropdown>
  );
}

const TabItemMoreContainer = styled.div<StyleProps>`
  ${SMixinFlexRow("center", "center")};
  flex: none;
  width: 40px;
  height: 33px;
  padding-bottom: 3px;
  cursor: pointer;
  position: relative;
  color: ${(p) => p.theme.primary_color};

  [role="rfi-icon"] {
    transition: all 0.3s;
    ${({ visible }) => {
      if (visible) {
        return css`
          transform: rotateX(180deg);
        `;
      }
      return css``;
    }};
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    left: -20px;
    top: 0;
    width: 20px;
    height: 30px;
    ${({ theme }) => {
      return css`
        background: linear-gradient(to right, ${alpha(theme.header_background, 0)}, ${theme.header_background});
      `;
    }}
`;

export default TabItemMore;
