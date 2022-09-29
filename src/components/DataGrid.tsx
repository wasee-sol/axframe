import * as React from "react";
import styled from "@emotion/styled";
import { RFDGProps, RFDataGrid } from "react-frame-datagrid";

interface Props<T> extends RFDGProps<T> {}

export function DataGrid<T>({ frozenColumnIndex, width, height, columns, data, spinning }: Props<T>) {
  return (
    <Container>
      <RFDataGrid
        headerHeight={35}
        itemHeight={20}
        {...{ frozenColumnIndex, width, height, columns, data, spinning }}
      />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  overflow: hidden;

  [role="react-frame-datagrid"] {
    //transition: all 0.1s;
  }
`;
