import styled from "@emotion/styled";
import { useCounselingList } from "@hooks/pages/useCounselingList";
import { Button } from "antd";
import { IconText } from "components/common";
import { DataGrid } from "components/DataGrid";
import { SearchParams } from "components/search";
import { useContainerSize } from "hooks/useContainerSize";
import * as React from "react";
import { RFIListSearch } from "react-frame-icon";
import { CounselingItem } from "repository/CounselingRepositoryInterface";
import { PageLayout } from "styles/pageStyled";
import { mergeProps } from "utils/object";

interface Props {}

function PageCounselingList(props: Props) {
  const {
    t,
    filterTypeOptions,
    paramObjects,
    columns,
    counselingList,
    listSpinning,
    paramValues,
    handleSearch,
    handleReset,
    handleChangeSearchValue,
  } = mergeProps(props, useCounselingList());

  const bodyContainer = React.useRef<HTMLDivElement>(null);
  const { width: containerWidth, height: containerHeight } = useContainerSize(bodyContainer);

  return (
    <Container stretch role={"page-container"}>
      <Header>
        <IconText icon={<RFIListSearch />}>{t.pages.counseling.list.title}</IconText>

        <ButtonGroup compact>
          <Button size='small'>{t.button.excel}</Button>
          <Button size='small' onClick={handleReset}>
            {t.button.reset}
          </Button>
        </ButtonGroup>
      </Header>
      <SearchParams
        filterTypeOptions={filterTypeOptions}
        paramObjects={paramObjects}
        paramValues={paramValues}
        onChangeParams={handleChangeSearchValue}
        onSearch={handleSearch}
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
const ButtonGroup = styled(PageLayout.ButtonGroup)``;
const Body = styled(PageLayout.Body)``;

export default PageCounselingList;
