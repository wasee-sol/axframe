import styled from "@emotion/styled";
import { Button } from "antd";
import { IconText } from "@core/components/common";
import * as React from "react";
import { AXFIListSearch } from "@axframe/icon";
import { PageLayout } from "styles/pageStyled";
import { useI18n } from "@core/hooks/useI18n";
import { ROUTES } from "router/Routes";
import { ExampleListDataSet } from "./ExampleListDataSet";
import { useExampleListStore } from "./useExampleListStore";
import { useDidMountEffect } from "@core/hooks/useDidMountEffect";

interface Props {}
function ExampleIndex({}: Props) {
  const { t } = useI18n();
  const init = useExampleListStore((s) => s.init);
  const reset = useExampleListStore((s) => s.reset);
  const callExampleListApi = useExampleListStore((s) => s.callExampleListApi);

  const handleReset = React.useCallback(async () => {
    reset();
    await callExampleListApi();
  }, [callExampleListApi, reset]);

  useDidMountEffect(() => {
    init(ROUTES.EXAMPLES.children.LIST_NEW.path);
    callExampleListApi();
  });

  return (
    <Container stretch role={"page-container"}>
      <Header>
        <IconText icon={<AXFIListSearch />}>{t.pages.example.list.title}</IconText>

        <ButtonGroup compact>
          <Button size='small' onClick={() => {}}>
            {t.button.excel}
          </Button>
          <Button size='small' onClick={handleReset}>
            {t.button.reset}
          </Button>
        </ButtonGroup>
      </Header>

      <ExampleListDataSet />
    </Container>
  );
}

const Container = styled(PageLayout)``;
const Header = styled(PageLayout.Header)``;
const ButtonGroup = styled(PageLayout.ButtonGroup)``;

export default ExampleIndex;
