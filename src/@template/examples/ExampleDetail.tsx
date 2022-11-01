import styled from "@emotion/styled";
import { IconText } from "components/common";
import * as React from "react";
import { PageLayout } from "styles/pageStyled";
import { mergeProps } from "utils/object";
import { useExampleDetail } from "@hooks/examples/useExampleDetail";

interface Props {}

function ExampleDetail(props: Props) {
  const { t, urlParams } = mergeProps(props, useExampleDetail());

  return (
    <Container>
      <Header>
        <IconText icon={null}>
          {t.examples.counseling.detail.title} ({urlParams.id})
        </IconText>

        <ButtonGroup compact></ButtonGroup>
      </Header>
      <Body>조회내용</Body>
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

export default ExampleDetail;
