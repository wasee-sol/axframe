import styled from "@emotion/styled";
import { useCounselingList } from "@hooks/pages/useCounselingList";
import { Button } from "antd";
import { IconText } from "components/common";
import { DataGrid } from "components/DataGrid";
import { SearchTool } from "components/searchTool";
import { useContainerSize } from "hooks/useContainerSize";
import * as React from "react";
import { RFIListSearch } from "react-frame-icon";
import { CounselingItem } from "repository/CounselingRepositoryInterface";
import { PageLayout } from "styles/pageStyled";
import { mergeProps } from "utils/object";

interface Props {}

function PageCounselingList(props: Props) {
  const { t, paramKeyOptions, extraParams, columns, counselingList, getList, listSpinning, apiRequestParams } =
    mergeProps(props, useCounselingList());

  const bodyContainer = React.useRef<HTMLDivElement>(null);
  const { width: containerWidth, height: containerHeight } = useContainerSize(bodyContainer);

  const onSearch = React.useCallback(async () => {
    await getList({});
  }, [getList]);

  const onReload = React.useCallback(async () => {
    await getList();
  }, [getList]);

  React.useEffect(() => {
    (async () => {
      await getList();
    })();
  }, [getList]);

  return (
    <Container stretch role={"page-container"}>
      <Header>
        <IconText icon={<RFIListSearch />}>{t.pages.counseling.list.title}</IconText>

        <HeaderButtonGroup>
          <Button size='small'>{t.button.excel}</Button>
        </HeaderButtonGroup>
      </Header>
      <SearchTool
        filterTypeOptions={paramKeyOptions}
        extraParamOptions={extraParams}
        values={apiRequestParams}
        onChangeValues={() => {}}
        onSearch={onSearch}
        onReload={onReload}
      />
      <Body ref={bodyContainer}>
        <DataGrid<CounselingItem>
          frozenColumnIndex={0}
          width={containerWidth}
          height={containerHeight}
          columns={columns}
          data={counselingList}
          spinning={listSpinning}
        />
      </Body>
    </Container>
  );
}

const Container = styled(PageLayout)``;
const Header = styled(PageLayout.Header)``;
const HeaderButtonGroup = styled(PageLayout.HeaderButtonGroup)``;
const Body = styled(PageLayout.Body)``;

export default PageCounselingList;
