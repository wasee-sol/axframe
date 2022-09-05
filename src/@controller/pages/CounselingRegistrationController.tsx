import * as React from "react";
import PageCounselingRegistration from "@template/pages/PageCounselingRegistration";
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

interface Props {}

function CounselingRegistrationController(props: Props) {
  return <PageCounselingRegistration />;
}

export default CounselingRegistrationController;
