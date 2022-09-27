import * as React from "react";
import styled from "@emotion/styled";
import { RFDGProps, RFDataGrid } from "react-frame-datagrid";

interface Props<T> extends RFDGProps<T> {}

function DataGrid<T>({ width, height, columns, data }: Props<T>) {
  return (
    <Container>
      <RFDataGrid width={width} height={height} columns={columns} data={data} />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
`;

export default DataGrid;
