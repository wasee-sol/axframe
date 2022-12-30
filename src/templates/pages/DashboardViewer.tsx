import * as React from "react";
import styled from "@emotion/styled";
import { IconText } from "@core/components/common";
import { PageLayout } from "styles/pageStyled";
import { mergeProps } from "@core/utils/object";
import { useDashboardViewer } from "templateStores/pages/useDashboardViewer";

interface Props {}

function DashboardViewer(props: Props) {
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
const FormBoxHeader = styled(PageLayout.ContentBoxHeader)``;
const FormBox = styled(PageLayout.ContentBox)``;
const FormGroupTitle = styled(PageLayout.GroupTitle)``;
const ButtonGroup = styled(PageLayout.ButtonGroup)``;

export default DashboardViewer;
