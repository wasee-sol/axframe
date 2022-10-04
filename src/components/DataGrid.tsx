import * as React from "react";
import styled from "@emotion/styled";
import { RFDGProps, RFDataGrid } from "react-frame-datagrid";

interface Props<T> extends RFDGProps<T> {}

export function DataGrid<T>({ frozenColumnIndex, width, height, columns, data, spinning, page, onClick }: Props<T>) {
  return (
    <Container>
      <RFDataGrid
        headerHeight={35}
        itemHeight={20}
        footerHeight={35}
        {...{ frozenColumnIndex, width, height, columns, data, spinning, page, onClick }}
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
