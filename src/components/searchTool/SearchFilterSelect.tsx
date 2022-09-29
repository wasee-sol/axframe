import { Dropdown, Menu } from "antd";
import * as React from "react";
import styled from "@emotion/styled";
import { RFIArrowDown } from "react-frame-icon";
import { SearchFilterComponent } from "./SearchFilter";
import { SMixinFlexRow } from "styles/emotion";

const SearchFilterSelect: SearchFilterComponent = ({ icon, value, title, options }) => {
  return (
    <Dropdown
      trigger={["click"]}
      overlay={<Menu items={options?.map((option) => ({ key: option.value, label: option.label }))} />}
    >
      <Container>
        {icon}
        {value ?? title}
        <RFIArrowDown role={"arrow-down"} />
      </Container>
    </Dropdown>
  );
};

const Container = styled.div`
  ${SMixinFlexRow("flex-start", "center")};
  gap: 3px;
  cursor: pointer;

  &:hover {
    color: ${(p) => p.theme.link_hover_color};
  }

  [role="arrow-down"] {
    color: ${(p) => p.theme.disabled_color};
    font-size: 14px;
  }
`;

export default SearchFilterSelect;
