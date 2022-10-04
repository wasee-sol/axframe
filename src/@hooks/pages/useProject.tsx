import * as React from "react";
import PageProject from "@template/pages/PageProject";
import { usePageModel } from "hooks/usePageModel";
import { ROUTES } from "router/Routes";

export function useProject() {
  const { pageModel, pageModelMetadata, setPageModelMetadata } = usePageModel(ROUTES.PROJECT.path);

  return {
    pageModel,
    pageModelMetadata,
    setPageModelMetadata,
  };
}

function UseProject() {
  return <PageProject />;
}

export default UseProject;
