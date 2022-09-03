import * as React from "react";
import PageProject from "@template/pages/PageProject";
import { usePageModel } from "hooks/usePageModel";
import { getRoutesPath, ROUTES } from "router/Routes";

export function useProjectController() {
  const path = getRoutesPath([ROUTES.PROJECT.path]);
  const { pageModel, pageModelMetadata, setPageModelMetadata } = usePageModel(path);

  return {
    pageModel,
    pageModelMetadata,
    setPageModelMetadata,
  };
}

function ProjectController() {
  return <PageProject />;
}

export default ProjectController;
