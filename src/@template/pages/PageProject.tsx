import * as React from "react";
import styled from "@emotion/styled";
import { useProject } from "@hooks/pages/useProject";
import { mergeProps } from "utils/object";
import { DatePicker } from "antd";

interface Props {}

function PageProject(props: Props) {
  const { pageModel } = mergeProps(props, useProject());

  return (
    <ProjectPageContainer>
      <h1>ProjectPage</h1>
      <p>{pageModel?.path}</p>
      <b>{pageModel?.label}</b>
      <button>button</button>

      <DatePicker.RangePicker showTime />
    </ProjectPageContainer>
  );
}

const ProjectPageContainer = styled.div``;

export default PageProject;
