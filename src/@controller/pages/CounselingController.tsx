import * as React from "react";
import PageCounselingList from "../../@template/pages/PageCounselingList";
import PageCounselingRegistration from "../../@template/pages/PageCounselingRegistration";

export type CounselingPageType = "registration" | "list";

interface Props {
  pageType: CounselingPageType;
}

function CounselingController(props: Props) {
  if (props.pageType === "registration") {
    return <PageCounselingRegistration />;
  }

  return <PageCounselingList />;
}

export default CounselingController;
