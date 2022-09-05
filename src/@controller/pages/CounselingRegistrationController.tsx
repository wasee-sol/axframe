import { usePageModel } from "hooks/usePageModel";
import { ROUTES } from "router/Routes";

export function useCounselingRegistrationController() {
  const { pageModel, pageModelMetadata, setPageModelMetadata } = usePageModel([
    ROUTES.COUNSELING.path,
    ROUTES.COUNSELING.children.REGISTRATION.path,
  ]);

  return {
    pageModel,
    pageModelMetadata,
    setPageModelMetadata,
  };
}
