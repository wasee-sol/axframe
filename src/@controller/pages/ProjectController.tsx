import * as React from "react";
import PageProject from "@template/pages/PageProject";
import { usePageModel } from "hooks/usePageModel";

export function useProjectController() {
  const { pageModel } = usePageModel();

  return {
    pageModel,
  };
}

function ProjectController() {
  return <PageProject />;
}

export default ProjectController;
