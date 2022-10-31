import * as React from "react";
import styled from "@emotion/styled";
import DataCard from "./DataCard";

interface Props {}

function Dashboard(props: Props) {
  return (
    <Container>
      <Title>Dashboard title</Title>
      <Toolbar></Toolbar>

      <DataCardContainer>
        <DataCard />
      </DataCardContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
const Toolbar = styled.div``;
const DataCardContainer = styled.div``;

export default Dashboard;
