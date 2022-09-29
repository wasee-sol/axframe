import * as React from "react";
import styled from "@emotion/styled";
import { RFIArrowDown } from "react-frame-icon";
import { SearchFilterComponent } from "./SearchFilter";
import { SMixinFlexRow } from "styles/emotion";

const SearchFilterSelect: SearchFilterComponent = ({ icon, value, title }) => {
  return (
    <Container>
      {icon}
      {value ?? title}
      <RFIArrowDown role={"arrow-down"} />
    </Container>
  );
};

const Container = styled.div`
  ${SMixinFlexRow("flex-start", "center")};
  gap: 3px;

  [role="arrow-down"] {
    color: ${(p) => p.theme.disabled_color};
    font-size: 14px;
  }
`;

export default SearchFilterSelect;
