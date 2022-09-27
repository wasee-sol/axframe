import * as React from "react";
import { usePageModel } from "hooks/usePageModel";
import { RFDGColumn, RFDGDataItem } from "react-frame-datagrid";
import { ROUTES } from "router/Routes";
import { useI18n } from "hooks";
import {
  CounselingListResponse,
  CounselingListRequest,
  CounselingItem,
} from "../../repository/CounselingRepositoryInterface";
import { CounselingService } from "../../services";
import { useAppStore } from "../../stores";

export function useCounselingListController() {
  const windowWidth = useAppStore((s) => s.width);
  const windowHeight = useAppStore((s) => s.height);
  const { pageModel, pageModelMetadata, setPageModelMetadata } = usePageModel([
    ROUTES.COUNSELING.path,
    ROUTES.COUNSELING.children.LIST.path,
  ]);
  const { t, currentLanguage } = useI18n();

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

  const [apiResponse, setApiResponse] = React.useState<CounselingListResponse>();
  const [counselingList, setCounselingList] = React.useState<RFDGDataItem<CounselingItem>[]>();
  const [listSpinning, setListSpinning] = React.useState(false);

  const getList = React.useCallback(async (params: CounselingListRequest) => {
    setListSpinning(true);

    try {
      const res = await CounselingService.list(params);
      setApiResponse(res);
      setCounselingList(
        res.ds.map((values) => ({
          values,
        }))
      );
      return res;
    } catch (e) {
    } finally {
      setListSpinning(false);
    }
  }, []);

  return {
    windowWidth,
    windowHeight,
    pageModel,
    pageModelMetadata,
    setPageModelMetadata,
    t,
    currentLanguage,
    columns,
    setColumns,
    apiResponse,
    setApiResponse,
    getList,
    counselingList,
    listSpinning,
    setListSpinning,
  };
}
