import * as React from "react";
import styled from "@emotion/styled";
import MonacoEditor from "@monaco-editor/react";

interface Props {}

function DataCard(props: Props) {
  return (
    <Container>
      <Title>Datacard</Title>
      <CardTools></CardTools>
      <Editor>
        <MonacoEditor height={100} defaultLanguage='sql' defaultValue='// some comment' />
      </Editor>
      <ResultContainer>
        <ResultToolbar></ResultToolbar>
        <ResetViewer></ResetViewer>
      </ResultContainer>
    </Container>
  );
}

const Container = styled.div`
  background: ${(p) => p.theme.component_background};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 20px;
  gap: 12px;
`;
const Title = styled.div``;
const CardTools = styled.div``;
const Editor = styled.div``;
const ResultContainer = styled.div``;
const ResultToolbar = styled.div``;
const ResetViewer = styled.div``;

export default DataCard;
