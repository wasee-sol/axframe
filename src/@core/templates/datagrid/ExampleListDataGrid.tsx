import * as React from "react";
import styled from "@emotion/styled";
import { ExampleItem } from "../../services/example/ExampleRepositoryInterface";
import { DataGrid } from "@core/components/DataGrid";
import { useContainerSize } from "@core/hooks/useContainerSize";
import { AXFDGClickParams, AXFDGColumn, AXFDGSortParam } from "@axframe/datagrid";
import { useI18n } from "@core/hooks/useI18n";

interface Props {
  spinning: boolean;
  list: any[];
  listPaging: Record<any, any>;
  onChangePage: () => void;
  sortParams: AXFDGSortParam[];
  onChangeSortParams: () => void;
  onClick: () => void;
}

function ExampleListDataGrid({
  spinning,
  list,
  listPaging,
  onChangePage,
  sortParams,
  onChangeSortParams,
  onClick,
}: Props) {
  const { t } = useI18n();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { width: containerWidth, height: containerHeight } = useContainerSize(containerRef);

  const [colWidths, setColWidths] = React.useState<number[]>([]);
  const [columns, setColumns] = React.useState<AXFDGColumn<ExampleItem>[]>([]);

  const handleClickItem = React.useCallback((params: AXFDGClickParams<ExampleItem>) => {}, []);

  const handleSortChange = React.useCallback(async (sortParams: AXFDGSortParam[]) => {}, []);

  const handleColumnsChange = React.useCallback(
    (columnIndex: number, width: number, columns: AXFDGColumn<ExampleItem>[]) => {
      setColWidths(columns.map((column) => column.width));
    },
    [setColWidths]
  );

  // 데이터 그리드 컬럼 정의
  React.useEffect(() => {
    const _columns = [
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
      if (colWidths.length > 0) {
        column.width = colWidths[colIndex];
        return column;
      }

      return column;
    }) as AXFDGColumn<ExampleItem>[];

    setColumns(_columns);
  }, [t, colWidths, setColumns]);

  return (
    <Container ref={containerRef}>
      <DataGrid<ExampleItem>
        frozenColumnIndex={0}
        width={containerWidth}
        height={containerHeight}
        columns={columns}
        data={list}
        spinning={spinning}
        onClick={handleClickItem}
        page={{
          currentPage: listPaging?.pageNumber ?? 1,
          pageSize: listPaging?.pageSize ?? 0,
          totalPages: listPaging?.pgCount ?? 0,
          totalElements: list.length,
          loading: false,
          onChange: onChangePage,
        }}
        sort={{
          sortParams,
          onChange: handleSortChange,
        }}
        onChangeColumns={handleColumnsChange}
      />
    </Container>
  );
}

const Container = styled.div``;

export { ExampleListDataGrid };
