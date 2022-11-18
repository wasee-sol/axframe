import { usePageMetaData } from "@core/hooks/usePageMetaData";
import { useParams } from "react-router-dom";
import { ROUTES } from "router/Routes";
import { useI18n } from "hooks";

export function useExampleDetail() {
  const { currentPage, pageMetadata, setPageMetadata } = usePageMetaData(
    ROUTES.EXAMPLES.children.LIST_DETAIL.children.DETAIL.path
  );
  const { t, currentLanguage } = useI18n();
  const urlParams = useParams<{ id: string }>();

  return {
    currentPage: currentPage,
    pageModelMetadata: pageMetadata,
    setPageModelMetadata: setPageMetadata,
    t,
    currentLanguage,
    urlParams,
  };
}
