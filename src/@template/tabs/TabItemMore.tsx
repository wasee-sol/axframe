import { css } from "@emotion/react";
import { Dropdown, Menu } from "antd";
import * as React from "react";
import styled from "@emotion/styled";
import { RFIArrowDown } from "react-frame-icon";
import { SMixinFlexRow } from "styles/emotion";
import { useTabGroupController } from "@controller/tabs/TabGroupController";
import { mergeProps } from "utils/object";

interface StyleProps {
  visible?: boolean;
}

interface Props extends StyleProps {}

function TabItemMore(props: Props) {
  const { pagesValues, handleClickTab } = mergeProps(props, useTabGroupController());
  const [visible, setVisible] = React.useState(false);

  return (
    <Dropdown
      overlayClassName={"tab-item-more-dropdown"}
      overlay={
        <Menu
          items={pagesValues.map(([k, v]) => ({
            key: k,
            label: (
              <div
                onClick={() => {
                  handleClickTab(k, v.path);
                }}
              >
                {v.label}
              </div>
            ),
          }))}
        />
      }
      trigger={["click"]}
      align={{ targetOffset: [-5, 0] }}
      visible={visible}
      onVisibleChange={(visible) => setVisible(visible)}
    >
      <TabItemMoreContainer visible={visible}>
        <RFIArrowDown fontSize={18} />
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
    background: linear-gradient(to right, #ffffff00, #ffffff);
  }
`;

export default TabItemMore;
