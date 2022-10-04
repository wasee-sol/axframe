import styled from "@emotion/styled";
import { IconText } from "components/common";
import * as React from "react";
import { PageLayout } from "styles/pageStyled";
import { mergeProps } from "utils/object";
import { useCounselingDetail } from "@hooks/pages/useCounselingDetail";

interface Props {}

function PageCounselingDetail(props: Props) {
  const { t } = mergeProps(props, useCounselingDetail());

  return (
    <Container>
      <Header>
        <IconText icon={null}>조회 하기</IconText>

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

export default PageCounselingDetail;
