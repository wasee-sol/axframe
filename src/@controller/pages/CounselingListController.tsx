import { usePageModel } from "hooks/usePageModel";
import { ROUTES } from "router/Routes";
import { useI18n } from "hooks";
import { useAppStore } from "../../stores";

export function useCounselingListController() {
  const windowWidth = useAppStore((s) => s.width);
  const windowHeight = useAppStore((s) => s.height);
  const { pageModel, pageModelMetadata, setPageModelMetadata } = usePageModel([
    ROUTES.COUNSELING.path,
    ROUTES.COUNSELING.children.LIST.path,
  ]);
  const { t, currentLanguage } = useI18n();

  return {
    windowWidth,
    windowHeight,
    pageModel,
    pageModelMetadata,
    setPageModelMetadata,
    t,
    currentLanguage,
  };
}
