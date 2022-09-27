import * as React from "react";
import styled from "@emotion/styled";
import { RFDGProps, RFDataGrid } from "react-frame-datagrid";

interface Props<T> extends RFDGProps<T> {}

function DataGrid<T>({ frozenColumnIndex, width, height, columns, data, spinning }: Props<T>) {
  return (
    <Container>
      <RFDataGrid {...{ frozenColumnIndex, width, height, columns, data, spinning }} />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;

  [role="react-frame-datagrid"] {
    //transition: all 0.1s;
  }
`;

export default DataGrid;
