import { usePageModel } from "hooks/usePageModel";
import { ROUTES } from "router/Routes";
import { useI18n } from "hooks";

export function useCounselingListController() {
  const { pageModel, pageModelMetadata, setPageModelMetadata } = usePageModel([
    ROUTES.COUNSELING.path,
    ROUTES.COUNSELING.children.LIST.path,
  ]);
  const { t, currentLanguage } = useI18n();

  return {
    pageModel,
    pageModelMetadata,
    setPageModelMetadata,
    t,
    currentLanguage,
  };
}
