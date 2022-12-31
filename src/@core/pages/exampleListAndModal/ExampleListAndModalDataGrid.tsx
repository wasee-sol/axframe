import * as React from "react";
import styled from "@emotion/styled";
import { ExampleItem } from "@core/services/example/ExampleRepositoryInterface";
import { DataGrid } from "@core/components/DataGrid";
import { useContainerSize } from "@core/hooks/useContainerSize";
import { AXFDGColumn, AXFDGProps } from "@axframe/datagrid";
import { useI18n } from "@core/hooks/useI18n";
import { useExampleListAndModalStore } from "./useExampleListAndModalStore";

interface Props {
  onClick: AXFDGProps<ExampleItem>["onClick"];
}

function ExampleListAndModalDataGrid({ onClick }: Props) {
  const exampleListColWidths = useExampleListAndModalStore((s) => s.exampleListColWidths);
  const exampleListSortParams = useExampleListAndModalStore((s) => s.exampleListSortParams);
  const exampleListData = useExampleListAndModalStore((s) => s.exampleListData);
  const exampleListPage = useExampleListAndModalStore((s) => s.exampleListPage);
  const exampleListSpinning = useExampleListAndModalStore((s) => s.exampleListSpinning);
  const setExampleListColWidths = useExampleListAndModalStore((s) => s.setExampleListColWidths);
  const setExampleListSortParams = useExampleListAndModalStore((s) => s.setExampleListSortParams);
  const changeExampleListPage = useExampleListAndModalStore((s) => s.changeExampleListPage);

  const { t } = useI18n();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { width: containerWidth, height: containerHeight } = useContainerSize(containerRef);

  const handleColumnsChange = React.useCallback(
    (columnIndex: number, width: number, columns: AXFDGColumn<ExampleItem>[]) => {
      setExampleListColWidths(columns.map((column) => column.width));
    },
    [setExampleListColWidths]
  );

  const columns = React.useMemo(
    () =>
      [
        { key: "id", label: t.datagrid.id, align: "left", width: 80 },
        { key: "name", label: t.datagrid.성명, align: "left", width: 80 },
        { key: "cnsltDt", label: t.datagrid.상담일, align: "left", width: 100 },
        { key: "area", label: t.datagrid.행정구, align: "left", width: 80 },
        { key: "birthDt", label: t.datagrid.생년월일, align: "center", width: 120 },
        { key: "phone1", label: t.datagrid.연락처, align: "center", width: 150 },
        { key: "cnsltHow", label: t.datagrid.상담방법, align: "left", width: 100 },
        { key: "cnsltPath", label: t.datagrid.상담경로, align: "left", width: 150 },
        { key: "fmTyp", label: t.datagrid.가구유형, align: "left", width: 100 },
        { key: "homeTyp", label: t.datagrid.거주형태, align: "left", width: 100 },
        { key: "fldA", label: t.datagrid.수급, align: "left", width: 100 },
        { key: "hopePoint", label: t.datagrid.주요욕구, align: "left", width: 150 },
        { key: "updatedByNm", label: t.datagrid.상담원, align: "left", width: 120 },
      ].map((column, colIndex) => {
        if (exampleListColWidths.length > 0) {
          column.width = exampleListColWidths[colIndex];
          return column;
        }

        return column;
      }) as AXFDGColumn<ExampleItem>[],
    [t, exampleListColWidths]
  );

  return (
    <Container ref={containerRef}>
      <DataGrid<ExampleItem>
        frozenColumnIndex={0}
        width={containerWidth}
        height={containerHeight}
        columns={columns}
        data={exampleListData}
        spinning={exampleListSpinning}
        onClick={onClick}
        page={{
          ...exampleListPage,
          loading: false,
          onChange: async (currentPage, pageSize) => {
            await changeExampleListPage(currentPage, pageSize);
          },
        }}
        sort={{
          sortParams: exampleListSortParams,
          onChange: setExampleListSortParams,
        }}
        onChangeColumns={handleColumnsChange}
      />
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
`;

export { ExampleListAndModalDataGrid };
