import { Form } from "antd";
import { ParamObject, ParamType, ParamOption } from "components/search";
import { usePageModel, useI18n, useLink, useDidMountEffect, useSpinning } from "hooks";
import { omit } from "lodash";
import moment, { Moment } from "moment";
import * as React from "react";
import { RFDGColumn, RFDGSortParam, RFDGClickParams } from "react-frame-datagrid";
import {
  CounselingListResponse,
  CounselingListRequest,
  CounselingItem,
} from "repository/CounselingRepositoryInterface";
import { ROUTES } from "router/Routes";
import { CounselingService } from "services";

export interface SearchFilterParams extends CounselingListRequest {
  select1?: string;
  select2?: string;
  timeRange?: Moment[];
  filterType?: string;
  filter?: string;
}

interface PageModalMetaData extends SearchFilterParams {
  showSearchParamChildren: boolean;
  colWidths: number[];
}

export function useExampleList() {
  const [searchForm] = Form.useForm();
  const { pageModel, pageModelMetadata, setPageModelMetadata } = usePageModel<PageModalMetaData>(
    ROUTES.EXAMPLES.children.LIST_DETAIL.children.LIST.path
  );
  const { t, currentLanguage } = useI18n();
  const { linkByPattern } = useLink();
  const { isBusy, spinning, setSpinning } = useSpinning<{ getApi: boolean }>();
  const defaultRequestParams = React.useRef<CounselingListRequest>({
    pageNumber: 1,
    pageSize: 100,
  }).current;

  const [filterTypeOptions, setFilterTypeOptions] = React.useState<ParamOption[]>([]);
  const [paramObjects, setParamObjects] = React.useState<ParamObject[]>([]);
  const [columns, setColumns] = React.useState<RFDGColumn<CounselingItem>[]>([]);
  const [paramValues, setParamValues] = React.useState<CounselingListRequest>(defaultRequestParams);
  const [apiResponse, setApiResponse] = React.useState<CounselingListResponse>();
  const [showSearchParamChildren, setShowSearchParamChildren] = React.useState(false);
  const [sortParams, setSortParams] = React.useState<RFDGSortParam[]>([]);
  const [colWidths, setColWidths] = React.useState<number[]>([]);

  const counselingList = React.useMemo(
    () =>
      apiResponse?.ds.map((values) => ({
        values,
      })) ?? [],
    [apiResponse?.ds]
  );

  const page = React.useMemo(() => apiResponse?.rs, [apiResponse]);

  const getList = React.useCallback(
    async (params: CounselingListRequest) => {
      if (isBusy) return;
      setSpinning({ getApi: true });

      try {
        const res = await CounselingService.list(params);
        setApiResponse(res);

        return res;
      } catch (e) {
      } finally {
        setSpinning({ getApi: false });
      }
    },
    [isBusy, setSpinning]
  );

  const handleSearch = React.useCallback(async () => {
    await getList(paramValues);
  }, [getList, paramValues]);

  const handleReload = React.useCallback(async () => {
    await getList(paramValues);
  }, [getList, paramValues]);

  const handleReset = React.useCallback(async () => {
    const requestParams = {
      ...defaultRequestParams,
    } as CounselingListRequest;

    setParamValues(requestParams);
    setSortParams([]);
    setColWidths([]);
    searchForm.resetFields();
    await getList(requestParams);
  }, [defaultRequestParams, getList, searchForm]);

  const handleChangeSearchValue = React.useCallback(
    (values: SearchFilterParams) => {
      // adapter start
      const _values: CounselingListRequest = {};
      if (values.timeRange) {
        _values.sttDt = values.timeRange[0].format("YYYY-MM-DD");
        _values.endDt = values.timeRange[1].format("YYYY-MM-DD");
      } else {
        _values.sttDt = "";
        _values.endDt = "";
        paramValues["timeRange"] = null;
      }
      // adapter end

      const requestParams = {
        ...paramValues,
        ...values,
        sttDt: _values.sttDt,
        endDt: _values.endDt,
      } as CounselingListRequest;

      setParamValues(requestParams);
    },
    [paramValues]
  );

  const handlePageChange = React.useCallback(
    async (pageNo: number, pageSize?: number) => {
      const requestParams = {
        ...paramValues,
        pageNumber: pageNo,
        pageSize: pageSize,
      } as CounselingListRequest;

      await setParamValues(requestParams);
      await getList(requestParams);
    },
    [paramValues, getList]
  );

  const handleSortChange = React.useCallback(
    async (sortParams: RFDGSortParam[]) => {
      const requestParams = {
        ...paramValues,
        sorts: sortParams,
      } as CounselingListRequest;

      setSortParams(sortParams);
      setParamValues(requestParams);
      await getList(requestParams);
    },
    [getList, paramValues]
  );

  const handleColumnsChange = React.useCallback(
    (columnIndex: number, width: number, columns: RFDGColumn<CounselingItem>[]) => {
      setColWidths(columns.map((column) => column.width));
    },
    []
  );

  const onClickItem = React.useCallback(
    (params: RFDGClickParams<CounselingItem>) => {
      linkByPattern(ROUTES.EXAMPLES.children.LIST_DETAIL.children.DETAIL, { id: params.item.id });
    },
    [linkByPattern]
  );

  React.useEffect(() => {
    setFilterTypeOptions([
      { value: "", label: t.filterType.전체 },
      { value: "title", label: t.filterType.제목 },
      { value: "writer", label: t.filterType.작성자 },
    ]);

    setParamObjects([
      {
        title: t.formItem.counseling.area.label,
        name: "select1",
        type: ParamType.SELECT,
        options: t.formItem.counseling.area.options,
      },
      {
        title: t.formItem.counseling.cnsltHow.label,
        name: "select2",
        type: ParamType.SELECT,
        options: t.formItem.counseling.cnsltHow.options,
      },
      {
        title: t.formItem.counseling.cnsltDt.label,
        name: "timeRange",
        type: ParamType.TIME_RANGE,
      },
    ]);
  }, [t]);

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
    }) as RFDGColumn<CounselingItem>[];

    setColumns(_columns);
  }, [t, colWidths]);

  // sync pageModelMetadata
  React.useEffect(() => {
    setPageModelMetadata({
      ...paramValues,
      showSearchParamChildren,
      colWidths,
    });
  }, [colWidths, paramValues, setPageModelMetadata, showSearchParamChildren]);

  useDidMountEffect(() => {
    const requestParams = {
      ...defaultRequestParams,
      ...pageModelMetadata,
    } as CounselingListRequest;

    // adapter start
    if (requestParams.sttDt && requestParams.endDt) {
      requestParams["timeRange"] = [moment(requestParams.sttDt), moment(requestParams.endDt)];
    }
    // adapter end

    setParamValues(omit(requestParams, ["showSearchParamChildren", "colWidths"]));
    setShowSearchParamChildren(pageModelMetadata?.showSearchParamChildren ?? false);
    setSortParams(requestParams.sorts ?? []);
    setColWidths(pageModelMetadata?.colWidths ?? []);

    (async () => {
      await getList(requestParams);
    })();
  });

  return {
    searchForm,
    pageModel,
    pageModelMetadata,
    setPageModelMetadata,
    t,
    currentLanguage,
    filterTypeOptions,
    paramObjects,
    setParamObjects,
    columns,
    apiResponse,
    setApiResponse,
    getList,
    counselingList,
    page,
    sortParams,
    listSpinning: spinning?.getApi,
    paramValues,

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
