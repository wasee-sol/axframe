import * as React from "react";
import styled from "@emotion/styled";
import { IconText } from "components/common";
import { PageLayout } from "styles/pageStyled";
import { mergeProps } from "utils/object";
import { useDashboardViewer } from "@hooks/pages/useDashboardViewer";

interface Props {}

function PageDashboardViewer(props: Props) {
  const { t } = mergeProps(props, useDashboardViewer());

  return (
    <Container>
      <Header>
        <IconText icon={null}>TITLE</IconText>

        <ButtonGroup compact></ButtonGroup>
      </Header>
      <Body>테스트</Body>
    </Container>
  );
}

const Container = styled(PageLayout)``;
const Header = styled(PageLayout.Header)``;
const Body = styled(PageLayout.Body)``;
const FormBoxHeader = styled(PageLayout.FormBoxHeader)``;
const FormBox = styled(PageLayout.FormBox)``;
const FormGroupTitle = styled(PageLayout.FormGroupTitle)``;
const ButtonGroup = styled(PageLayout.ButtonGroup)``;

export default PageDashboardViewer;
