import styled from "@emotion/styled";
import { SMixinFlexColumn, SMixinFlexRow } from "./mixins";

const AppContainer = styled.div`
  ${SMixinFlexColumn("stretch", "stretch")};
  height: 100vh;
  width: 100vw;
  background: ${(p) => p.theme.body_background};
`;

export default AppContainer;
