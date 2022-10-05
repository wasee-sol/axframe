import * as React from "react";
import PageProject from "@template/pages/PageProject";
import { usePageModel } from "hooks/usePageModel";
import { ROUTES } from "router/Routes";
import { useI18n } from "../../hooks";

export function useProject() {
  const { pageModel, pageModelMetadata, setPageModelMetadata } = usePageModel(ROUTES.PROJECT.path);
  const { t, currentLanguage } = useI18n();

  return {
    t,
    currentLanguage,
    pageModel,
    pageModelMetadata,
    setPageModelMetadata,
  };
}

function UseProject() {
  return <PageProject />;
}

export default UseProject;
