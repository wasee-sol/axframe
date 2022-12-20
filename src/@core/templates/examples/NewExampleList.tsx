import styled from "@emotion/styled";
import { Button } from "antd";
import { IconText } from "@core/components/common";
import * as React from "react";
import { AXFIListSearch } from "@axframe/icon";
import { PageLayout } from "styles/pageStyled";
import { useI18n } from "@core/hooks/useI18n";
import { ExampleListDataSet } from "../dataSet";
import { usePageMetaData } from "@core/hooks/usePageMetaData";
import { ROUTES } from "router/Routes";
import { useLink } from "@core/hooks/useLink";

interface Props {}
interface PageMetaData {
  exampleListRequestParams: Record<string, any>;
  exampleListMetadata: Record<string, any>;
}

function NewExampleList({}: Props) {
  const { t } = useI18n();
  // TODO : 권한정보 가져오기
  const { pageMetadata, setPageMetadata } = usePageMetaData<PageMetaData>(ROUTES.EXAMPLES.children.LIST_NEW.path);
  const { linkByRoute, linkByTo } = useLink();

  const handleReset = React.useCallback(() => {}, []);
  const handleExcelExport = React.useCallback(() => {}, []);

  return (
    <Container stretch role={"page-container"}>
      <Header>
        <IconText icon={<AXFIListSearch />}>{t.pages.example.list.title}</IconText>

        <ButtonGroup compact>
          <Button size='small' onClick={handleExcelExport}>
            {t.button.excel}
          </Button>
          <Button size='small' onClick={handleReset}>
            {t.button.reset}
          </Button>
        </ButtonGroup>
      </Header>

      <Body>
        <ExampleListDataSet
          requestParams={pageMetadata?.exampleListRequestParams}
          onChangeRequestParams={() => {}}
          metaData={pageMetadata?.exampleListMetadata}
          onChangeMetadata={() => {}}
        />
      </Body>
    </Container>
  );
}

const Container = styled(PageLayout)``;
const Header = styled(PageLayout.Header)``;
const ButtonGroup = styled(PageLayout.ButtonGroup)``;
const Body = styled(PageLayout.Body)``;

export default NewExampleList;
