import * as React from "react";
import PageCounselingList from "@template/pages/PageCounselingList";
import { usePageModel } from "../../hooks/usePageModel";
import { getRoutesPath, ROUTES } from "../../router/Routes";

export function useCounselingListController() {
  const path = getRoutesPath([ROUTES.COUNSELING.path, ROUTES.COUNSELING.children.LIST.path]);
  const { pageModel, pageModelMetadata, setPageModelMetadata } = usePageModel(path);

  return {
    pageModel,
    pageModelMetadata,
    setPageModelMetadata,
  };
}

interface Props {}

function CounselingListController(props: Props) {
  return <PageCounselingList />;
}

export default CounselingListController;
