import * as React from "react";
import PageCounselingRegistration from "@template/pages/PageCounselingRegistration";
import { usePageModel } from "hooks/usePageModel";
import { getRoutesPath, ROUTES } from "router/Routes";

export function useCounselingRegistrationController() {
  const path = getRoutesPath([ROUTES.COUNSELING.path, ROUTES.COUNSELING.children.REGISTRATION.path]);
  const { pageModel, pageModelMetadata, setPageModelMetadata } = usePageModel(path);

  return {
    pageModel,
    pageModelMetadata,
    setPageModelMetadata,
  };
}

interface Props {}

function CounselingRegistrationController(props: Props) {
  return <PageCounselingRegistration />;
}

export default CounselingRegistrationController;
