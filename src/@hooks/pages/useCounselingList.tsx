import { Form } from "antd";
import * as React from "react";
import { usePageModel } from "hooks/usePageModel";
import { RFDGColumn } from "react-frame-datagrid";
import { RFDGClickParams } from "react-frame-datagrid/dist/commonjs/types";
import { ROUTES } from "router/Routes";
import { useI18n, useLink } from "hooks";
import { useDidMountEffect } from "hooks";
import {
  CounselingListResponse,
  CounselingListRequest,
  CounselingItem,
} from "repository/CounselingRepositoryInterface";
import { CounselingService } from "services";
import { useAppStore } from "stores";
import { ParamObject, ParamType, ParamOption } from "components/search";
import moment, { Moment } from "moment";

export interface SearchFilterParams extends CounselingListRequest {
  select1?: string;
  select2?: string;
  timeRange?: Moment[];
  filterType?: string;
  filter?: string;
}

interface PageModalMetaData extends SearchFilterParams {
  showSearchParamChildren: boolean;
}

export function useCounselingList() {
  const [searchForm] = Form.useForm();
  const windowWidth = useAppStore((s) => s.width);
  const windowHeight = useAppStore((s) => s.height);
  const { pageModel, pageModelMetadata, setPageModelMetadata } = usePageModel<PageModalMetaData>(
    ROUTES.COUNSELING.children.LIST.path
  );
  const { t, currentLanguage } = useI18n();
  const { linkByPattern } = useLink();
  const defaultRequestParams = React.useRef<CounselingListRequest>({
    pageNumber: 1,
    pageSize: 100,
  }).current;

  const [filterTypeOptions, setFilterTypeOptions] = React.useState<ParamOption[]>([]);
  const [paramObjects, setParamObjects] = React.useState<ParamObject[]>([]);
  const [columns, setColumns] = React.useState<RFDGColumn<CounselingItem>[]>([]);
  const [paramValues, setParamValues] = React.useState<CounselingListRequest>(defaultRequestParams);
  const [apiResponse, setApiResponse] = React.useState<CounselingListResponse>();
  const [listSpinning, setListSpinning] = React.useState(false);
  const [showSearchParamChildren, setShowSearchParamChildren] = React.useState(false);

  const getList = React.useCallback(async (params: CounselingListRequest) => {
    setListSpinning(true);

    try {
      const res = await CounselingService.list(params);
      setApiResponse(res);

      return res;
    } catch (e) {
    } finally {
      setListSpinning(false);
    }
  }, []);

  const handleSearch = React.useCallback(async () => {
    await getList(paramValues);
  }, [getList, paramValues]);

  const handleReload = React.useCallback(async () => {
    await getList(paramValues);
  }, [getList, paramValues]);

  const handleReset = React.useCallback(() => {
    setParamValues({ ...defaultRequestParams });
    searchForm.resetFields();
  }, [defaultRequestParams, searchForm]);

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

  const onPageChange = React.useCallback(
    async (pageNo: number, pageSize?: number) => {
      const requestParams = {
        ...paramValues,
        pageNumber: pageNo,
        pageSize: pageSize,
      } as CounselingListRequest;

      setParamValues(requestParams);
      await getList(requestParams);
    },
    [paramValues, getList]
  );

  const onClickItem = React.useCallback(
    (params: RFDGClickParams<CounselingItem>) => {
      linkByPattern(ROUTES.COUNSELING.children.DETAIL, { id: params.item.id });
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

    setColumns([
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
    ]);
  }, [t]);

  useDidMountEffect(() => {
    const requestParams = {
      ...defaultRequestParams,
      ...pageModelMetadata,
    } as CounselingListRequest;

    // adapter start
    Object.keys(requestParams).forEach((key) => {
      if (key.startsWith("_")) {
        delete requestParams[key];
      }
    });
    if (requestParams.sttDt && requestParams.endDt) {
      requestParams["timeRange"] = [moment(requestParams.sttDt), moment(requestParams.endDt)];
    }
    // adapter end

    setParamValues(requestParams);
    setShowSearchParamChildren(pageModelMetadata?.showSearchParamChildren ?? false);

    (async () => {
      await getList(requestParams);
    })();
  });

  // sync pageModelMetadata
  React.useEffect(() => {
    setPageModelMetadata({
      ...paramValues,
      showSearchParamChildren,
    });
  }, [paramValues, setPageModelMetadata, showSearchParamChildren]);

  return {
    searchForm,
    windowWidth,
    windowHeight,
    pageModel,
    pageModelMetadata,
    setPageModelMetadata,
    t,
    currentLanguage,
    filterTypeOptions,
    paramObjects,
    setParamObjects,
    columns,
    setColumns,
    apiResponse,
    setApiResponse,
    getList,
    counselingList:
      apiResponse?.ds.map((values) => ({
        values,
      })) ?? [],
    page: apiResponse?.rs,
    listSpinning,
    setListSpinning,
    paramValues,
    setParamValues,

    handleSearch,
    handleReload,
    handleReset,
    handleChangeSearchValue,
    onPageChange,
    showSearchParamChildren,
    setShowSearchParamChildren,
    onClickItem,
  };
}
