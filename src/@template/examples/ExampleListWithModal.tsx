import styled from "@emotion/styled";
import { useExampleListWithModal } from "@hooks/examples/useExampleListWithModal";
import { Button } from "antd";
import { IconText } from "components/common";
import { DataGrid } from "components/DataGrid";
import { SearchParams } from "components/search";
import { useContainerSize } from "hooks";
import * as React from "react";
import { RFIListSearch } from "react-frame-icon";
import { CounselingItem } from "repository/CounselingRepositoryInterface";
import { PageLayout } from "styles/pageStyled";
import { mergeProps } from "utils/object";

interface Props {}

function ExampleListWidthModal(props: Props) {
  const {
    searchForm,
    t,
    filterTypeOptions,
    paramObjects,
    columns,
    counselingList,
    page,
    sortParams,
    listSpinning,
    paramValues,
    handleSearch,
    handleReset,
    handleChangeSearchValue,
    handlePageChange,
    handleSortChange,
    handleColumnsChange,
    showSearchParamChildren,
    setShowSearchParamChildren,
    onClickItem,
  } = mergeProps(props, useExampleListWithModal());

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
        form={searchForm}
        filterTypeOptions={filterTypeOptions}
        paramObjects={paramObjects}
        paramValues={paramValues}
        onChangeParams={handleChangeSearchValue}
        onSearch={handleSearch}
        visibleChildren={showSearchParamChildren}
        onChangeVisibleChildren={(visible) => setShowSearchParamChildren(visible)}
        spinning={listSpinning}
      />
      <Body ref={bodyContainer}>
        <DataGrid<CounselingItem>
          frozenColumnIndex={0}
          width={containerWidth}
          height={containerHeight}
          columns={columns}
          data={counselingList}
          spinning={listSpinning}
          onClick={onClickItem}
          page={{
            currentPage: page?.pageNumber ?? 1,
            pageSize: page?.pageSize ?? 0,
            totalPages: page?.pgCount ?? 0,
            totalElements: counselingList.length,
            loading: false,
            onChange: handlePageChange,
          }}
          sort={{
            sortParams,
            onChange: handleSortChange,
          }}
          onChangeColumns={handleColumnsChange}
        />
      </Body>
    </Container>
  );
}

const Container = styled(PageLayout)``;
const Header = styled(PageLayout.Header)``;
const ButtonGroup = styled(PageLayout.ButtonGroup)``;
const Body = styled(PageLayout.Body)``;

export default ExampleListWidthModal;
