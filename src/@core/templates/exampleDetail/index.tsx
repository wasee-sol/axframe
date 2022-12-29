import styled from "@emotion/styled";
import { Button } from "antd";
import { IconText, Loading } from "@core/components/common";
import * as React from "react";
import { AXFIWriteForm } from "@axframe/icon";
import { PageLayout } from "styles/pageStyled";
import { useI18n } from "@core/hooks/useI18n";
import { useDidMountEffect } from "@core/hooks/useDidMountEffect";
import { ROUTES } from "router/Routes";
import { ExampleDetailView } from "./ExampleDetailView";
import { useExampleDetailStore } from "./useExampleDetailStore";
import { useParams } from "react-router-dom";

interface Props {}
function ExampleDetail(props: Props) {
  const { t } = useI18n();
  const init = useExampleDetailStore((s) => s.init);
  const reset = useExampleDetailStore((s) => s.reset);
  const exampleDetailSpinning = useExampleDetailStore((s) => s.exampleDetailSpinning);
  const urlParams = useParams<{ id: string }>();

  useDidMountEffect(() => {
    init(ROUTES.EXAMPLES.children.LIST_DETAIL.children.DETAIL.path);
  });

  return (
    <Container>
      <Header>
        <IconText icon={<AXFIWriteForm />}>{t.pages.counseling.registration.title}</IconText>

        <ButtonGroup compact>
          <Button size='small' onClick={reset}>
            {t.button.reset}
          </Button>
        </ButtonGroup>
      </Header>

      <ExampleDetailView />

      <Loading active={exampleDetailSpinning} />
    </Container>
  );
}

const Container = styled(PageLayout)``;
const Header = styled(PageLayout.Header)``;
const ButtonGroup = styled(PageLayout.ButtonGroup)``;

export default ExampleDetail;
