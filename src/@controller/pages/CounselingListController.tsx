import { usePageModel } from "hooks/usePageModel";
import { ROUTES } from "router/Routes";

export function useCounselingListController() {
  const { pageModel, pageModelMetadata, setPageModelMetadata } = usePageModel([
    ROUTES.COUNSELING.path,
    ROUTES.COUNSELING.children.LIST.path,
  ]);

  return {
    pageModel,
    pageModelMetadata,
    setPageModelMetadata,
  };
}
