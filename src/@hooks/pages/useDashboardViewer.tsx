import { usePageModel } from "hooks/usePageModel";
import { ROUTES } from "router/Routes";
import { useI18n } from "hooks";

export function useDashboardViewer() {
  const { pageModel, pageModelMetadata, setPageModelMetadata } = usePageModel(ROUTES.DASHBOARD_VIEWER.path);
  const { t, currentLanguage } = useI18n();

  return {
    pageModel,
    pageModelMetadata,
    setPageModelMetadata,
    t,
    currentLanguage,
  };
}
