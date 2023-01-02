import * as React from "react";
import styled from "@emotion/styled";
import { IconText } from "@core/components/common";
import { PageLayout } from "styles/pageStyled";
interface Props {}

function App({}: Props) {
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
const ButtonGroup = styled(PageLayout.ButtonGroup)``;

export default App;
