import * as React from "react";
import { usePageModel } from "hooks/usePageModel";
import { RFDGColumn } from "react-frame-datagrid";
import { RFIWriteForm } from "react-frame-icon";
import { ROUTES } from "router/Routes";
import { useI18n } from "hooks";
import {
  CounselingListResponse,
  CounselingListRequest,
  CounselingItem,
} from "../../repository/CounselingRepositoryInterface";
import { CounselingService } from "../../services";
import { useAppStore } from "../../stores";
import { Filter, FilterType } from "components/searchTool";

export function useCounselingList() {
  const windowWidth = useAppStore((s) => s.width);
  const windowHeight = useAppStore((s) => s.height);
  const { pageModel, pageModelMetadata, setPageModelMetadata } = usePageModel([
    ROUTES.COUNSELING.path,
    ROUTES.COUNSELING.children.LIST.path,
  ]);
  const { t, currentLanguage } = useI18n();

  const [filterTypeOptions, setFilterTypeOptions] = React.useState([
    { value: "title", label: "TITLE" },
    { value: "writer", label: "WRITER" },
  ]);
  const [extraParamOptions, setExtraParamOptions] = React.useState<Filter[]>([
    {
      title: "행정구역",
      key: "select1",
      icon: <RFIWriteForm />,
      type: FilterType.SELECT,
      options: [
        { value: "중구", label: "중구" },
        { value: "동구", label: "동구" },
        { value: "서구", label: "서구" },
        { value: "남구", label: "남구" },
        { value: "북구", label: "북구" },
      ],
    },
    {
      title: "상담방법",
      key: "select2",
      type: FilterType.SELECT,
      options: [
        { value: "유선", label: "유선" },
        { value: "내방", label: "내방" },
      ],
    },
    {
      title: "상담일자",
      key: "timeRange",
      type: FilterType.TIME_RANGE,
    },
  ]);

  const [columns, setColumns] = React.useState<RFDGColumn<CounselingItem>[]>([
    { key: "id", label: "번호", align: "left", width: 80 },
    { key: "name", label: "성명", align: "left", width: 80 },
    { key: "cnsltDt", label: "상담일", align: "left", width: 100 },
    { key: "area", label: "행정구", align: "left", width: 80 },
    { key: "birthDt", label: "생년월일", align: "center", width: 80 },
    { key: "phone1", label: "연락처1", align: "center", width: 100 },
    { key: "cnsltHow", label: "상담방법", align: "left", width: 200 },
    { key: "cnsltPath", label: "상담경로", align: "left", width: 100 },
    { key: "fmTyp", label: "가구유형", align: "left", width: 250 },
    { key: "homeTyp", label: "거주형태", align: "left", width: 100 },
    { key: "fldA", label: "수급", align: "left", width: 250 },
    { key: "hopePoint", label: "주요욕구", align: "left", width: 250 },
    { key: "updatedByNm", label: "상담원", align: "left", width: 120 },
  ]);

  const [apiRequestParams, setApiRequestParams] = React.useState<CounselingListRequest>({
    pageNumber: 1,
    pageSize: 100,
  });
  const [apiResponse, setApiResponse] = React.useState<CounselingListResponse>();
  const [listSpinning, setListSpinning] = React.useState(false);

  const getList = React.useCallback(
    async (params?: CounselingListRequest) => {
      setListSpinning(true);

      try {
        const res = await CounselingService.list(params ?? apiRequestParams);
        setApiResponse(res);

        return res;
      } catch (e) {
      } finally {
        setListSpinning(false);
      }
    },
    [apiRequestParams]
  );

  return {
    windowWidth,
    windowHeight,
    pageModel,
    pageModelMetadata,
    setPageModelMetadata,
    t,
    currentLanguage,
    paramKeyOptions: filterTypeOptions,
    extraParams: extraParamOptions,
    setExtraParams: setExtraParamOptions,
    columns,
    setColumns,
    apiResponse,
    setApiResponse,
    getList,
    counselingList:
      apiResponse?.ds.map((values) => ({
        values,
      })) ?? [],
    listSpinning,
    setListSpinning,
    apiRequestParams,
    setApiRequestParams,
  };
}
