import { usePageModel } from "hooks/usePageModel";
import { useParams } from "react-router-dom";
import { ROUTES } from "router/Routes";
import { useI18n } from "hooks";

export function useCounselingDetail() {
  const { pageModel, pageModelMetadata, setPageModelMetadata } = usePageModel(ROUTES.COUNSELING.children.DETAIL.path);
  const { t, currentLanguage } = useI18n();
  const urlParams = useParams<{ id: string }>();

  return {
    pageModel,
    pageModelMetadata,
    setPageModelMetadata,
    t,
    currentLanguage,
    urlParams,
  };
}
