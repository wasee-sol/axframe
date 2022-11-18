import { usePageMetaData } from "@core/hooks/usePageMetaData";
import { ROUTES } from "router/Routes";
import { useI18n } from "hooks";

export function useDashboard() {
  const { currentPage, pageMetadata, setPageMetadata } = usePageMetaData(ROUTES.DASHBOARD.path);
  const { t, currentLanguage } = useI18n();

  return {
    currentPage,
    pageMetadata,
    setPageMetadata,
    t,
    currentLanguage,
  };
}
