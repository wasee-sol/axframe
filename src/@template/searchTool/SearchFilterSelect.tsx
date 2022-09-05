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
      <RFIArrowDown />
    </Container>
  );
};

const Container = styled.div`
  ${SMixinFlexRow("flex-start", "center")};
`;

export default SearchFilterSelect;
