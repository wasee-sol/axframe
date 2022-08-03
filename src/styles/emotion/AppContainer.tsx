import styled from "@emotion/styled";

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${(p) => p.theme.body_background};
  color: ${(p) => p.theme.text_color};
`;

export default AppContainer;
