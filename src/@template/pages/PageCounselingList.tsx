import * as React from "react";
import styled from "@emotion/styled";
import { RFIListSearch } from "react-frame-icon";
import { PageLayout } from "styles/pageStyled";
import IconText from "../../components/common/IconText";

interface Props {}

function PageCounselingList(props: Props) {
  return (
    <Container>
      <Header>
        <IconText icon={<RFIListSearch />}>상담 기록지 목록</IconText>
      </Header>
      <Body></Body>
    </Container>
  );
}

const Container = styled(PageLayout)``;
const Header = styled(PageLayout.Header)``;
const Body = styled(PageLayout.Body)``;

export default PageCounselingList;
