import * as React from "react";
import styled from "@emotion/styled";
import { RFICalendarEvent, RFIArrowDown } from "react-frame-icon";
import { SMixinFlexRow } from "styles/emotion";
import { SearchFilterComponent } from "./SearchFilter";

const SearchFilterTimeRange: SearchFilterComponent = ({ value }) => {
  return (
    <Container>
      <RFICalendarEvent />
      {value}
      <RFIArrowDown />
    </Container>
  );
};

const Container = styled.div`
  ${SMixinFlexRow("flex-start", "center")};
`;

export default SearchFilterTimeRange;
