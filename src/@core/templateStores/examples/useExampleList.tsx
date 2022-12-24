import { Form } from "antd";
import { SearchParamType } from "@core/components/search";
import { useI18n, useLink, useListPageData, usePageMetaData, useSpinning } from "hooks";
import { Moment } from "moment";
import * as React from "react";
import { AXFDGClickParams, AXFDGColumn, AXFDGSortParam } from "@axframe/datagrid";
import { ExampleService, ExampleItem, ExampleListRequest, ExampleListResponse } from "services";
import { ROUTES } from "router/Routes";

export interface SearchFilterParams extends ExampleListRequest {
  select1?: string;
  select2?: string;
  timeRange?: Moment[];
  filterType?: string;
  filter?: string;
}

interface PageMetaData extends SearchFilterParams {
  showSearchParamChildren: boolean;
  colWidths: number[];
}

export function useExampleList() {
  const [searchForm] = Form.useForm();
  const { currentPage, pageMetadata, setPageMetadata } = usePageMetaData<PageMetaData>(
    ROUTES.EXAMPLES.children.LIST_DETAIL.children.LIST.path
  );
  const { t, currentLanguage } = useI18n();
  const { linkByRoute } = useLink();
  const { isBusy, spinning, setSpinning } = useSpinning<{ getApi: boolean }>();
  const initialSearchParams = React.useRef<ExampleListRequest>({
    pageNumber: 1,
    pageSize: 100,
  }).current;

  const {
    showSearchParamChildren,
    setShowSearchParamChildren,
    searchFilterTypeOptions,
    setSearchFilterTypeOptions,
    searchParamObjects,
    setSearchParamObjects,
    searchParamValues,
    setSearchParamValues,
    columns,
    setColumns,
    colWidths,
    setColWidths,
    sortParams,
    setSortParams,
    // selectedIds,
    // setSelectedIds,
    apiResponse,
    setApiResponse,
  } = useListPageData<ExampleListRequest, ExampleListResponse, ExampleItem>(initialSearchParams, pageMetadata);

  const counselingList = React.useMemo(
    () =>
      apiResponse?.ds.map((values) => ({
        values,
      })) ?? [],
    [apiResponse?.ds]
  );

  const listPaging = React.useMemo(() => apiResponse?.rs, [apiResponse]);

  const getList = React.useCallback(
    async (params?: ExampleListRequest) => {
      if (isBusy) return;
      setSpinning({ getApi: true });

      try {
        const res = await ExampleService.list(params ?? searchParamValues);
        setApiResponse(res);

        return res;
      } catch (e) {
      } finally {
        setSpinning({ getApi: false });
      }
    },
    [isBusy, searchParamValues, setApiResponse, setSpinning]
  );

  const handleSearch = React.useCallback(async () => {
    await getList();
  }, [getList]);

  const handleReload = React.useCallback(async () => {
    await getList();
  }, [getList]);

  const handleReset = React.useCallback(async () => {
    const requestParams = {
      ...initialSearchParams,
    } as ExampleListRequest;

    setSearchParamValues(requestParams);
    setSortParams([]);
    setColWidths([]);
    searchForm.resetFields();
    await getList(requestParams);
  }, [initialSearchParams, setSearchParamValues, setSortParams, setColWidths, searchForm, getList]);

  const handleChangeSearchValue = React.useCallback(
    (values: SearchFilterParams) => {
      const requestParams = {
        ...setSearchParamValues,
        ...values,
      } as ExampleListRequest;

      setSearchParamValues(requestParams);
    },
    [setSearchParamValues]
  );

  const handlePageChange = React.useCallback(
    async (pageNo: number, pageSize?: number) => {
      const requestParams = {
        ...searchParamValues,
        pageNumber: pageNo,
        pageSize: pageSize,
      } as ExampleListRequest;

      await setSearchParamValues(requestParams);
      await getList(requestParams);
    },
    [searchParamValues, setSearchParamValues, getList]
  );

  const handleSortChange = React.useCallback(
    async (sortParams: AXFDGSortParam[]) => {
      const requestParams = {
        ...searchParamValues,
        sorts: sortParams,
      } as ExampleListRequest;

      setSortParams(sortParams);
      setSearchParamValues(requestParams);
      await getList(requestParams);
    },
    [getList, searchParamValues, setSearchParamValues, setSortParams]
  );

  const handleColumnsChange = React.useCallback(
    (columnIndex: number, width: number, columns: AXFDGColumn<ExampleItem>[]) => {
      setColWidths(columns.map((column) => column.width));
    },
    [setColWidths]
  );

  const onClickItem = React.useCallback(
    (params: AXFDGClickParams<ExampleItem>) => {
      linkByRoute(ROUTES.EXAMPLES.children.LIST_DETAIL.children.DETAIL, { id: params.item.id });
    },
    [linkByRoute]
  );

  React.useEffect(() => {
    setSearchFilterTypeOptions([
      { value: "", label: t.filterType.전체 },
      { value: "title", label: t.filterType.제목 },
      { value: "writer", label: t.filterType.작성자 },
    ]);

    setSearchParamObjects([
      {
        title: t.formItem.counseling.area.label,
        name: "select1",
        type: SearchParamType.SELECT,
        options: t.formItem.counseling.area.options,
      },
      {
        title: t.formItem.counseling.cnsltHow.label,
        name: "select2",
        type: SearchParamType.SELECT,
        options: t.formItem.counseling.cnsltHow.options,
      },
      {
        title: t.formItem.counseling.cnsltDt.label,
        name: "timeRange",
        type: SearchParamType.TIME_RANGE,
      },
    ]);
  }, [setSearchFilterTypeOptions, setSearchParamObjects, t]);

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

  // sync pageModelMetadata
  React.useEffect(() => {
    setPageMetadata({
      ...searchParamValues,
      showSearchParamChildren,
      colWidths,
    });
  }, [colWidths, searchParamValues, setPageMetadata, showSearchParamChildren]);

  React.useEffect(() => {
    (async () => {
      await getList(searchParamValues);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    searchForm,
    currentPage,
    pageMetadata,
    setPageMetadata,
    t,
    currentLanguage,
    searchFilterTypeOptions,
    searchParamObjects,
    setSearchParamObjects,
    searchParamValues,
    columns,
    apiResponse,
    setApiResponse,
    getList,
    counselingList,
    listPaging,
    sortParams,
    listSpinning: spinning?.getApi,

    handleSearch,
    handleReload,
    handleReset,
    handleChangeSearchValue,
    handlePageChange,
    handleSortChange,
    handleColumnsChange,
    showSearchParamChildren,
    setShowSearchParamChildren,
    onClickItem,
  };
}
