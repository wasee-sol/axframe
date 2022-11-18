import styled from "@emotion/styled";
import { Button } from "antd";
import { IconText } from "@core/components/common";
import { DataGrid } from "components/DataGrid";
import { SearchParams } from "@core/components/search";
import { useContainerSize } from "hooks";
import * as React from "react";
import { AXFIListSearch } from "@axframe/icon";
import { ExampleItem } from "services";
import { PageLayout } from "styles/pageStyled";
import { mergeProps } from "@core/utils/object";
import { useExampleListWithDrawer } from "@core/templateStores/examples/useExampleListWithDrawer";

interface Props {}

function ExampleListWidthDrawer(props: Props) {
  const {
    searchForm,
    t,
    searchFilterTypeOptions,
    searchParamObjects,
    searchParamValues,
    columns,
    counselingList,
    listPaging,
    sortParams,
    listSpinning,
    handleSearch,
    handleReset,
    handleChangeSearchValue,
    handlePageChange,
    handleSortChange,
    handleColumnsChange,
    showSearchParamChildren,
    setShowSearchParamChildren,
    onClickItem,
  } = mergeProps(props, useExampleListWithDrawer());

  const bodyContainer = React.useRef<HTMLDivElement>(null);
  const { width: containerWidth, height: containerHeight } = useContainerSize(bodyContainer);

  return (
    <Container stretch role={"page-container"}>
      <Header>
        <IconText icon={<AXFIListSearch />}>{t.pages.counseling.list.title}</IconText>

        <ButtonGroup compact>
          <Button size='small'>{t.button.excel}</Button>
          <Button size='small' onClick={handleReset}>
            {t.button.reset}
          </Button>
        </ButtonGroup>
      </Header>

      <SearchParams
        form={searchForm}
        filterTypeOptions={searchFilterTypeOptions}
        paramObjects={searchParamObjects}
        paramValues={searchParamValues}
        onChangeParams={handleChangeSearchValue}
        onSearch={handleSearch}
        visibleChildren={showSearchParamChildren}
        onChangeVisibleChildren={(visible) => setShowSearchParamChildren(visible)}
        spinning={listSpinning}
      />
      <Body ref={bodyContainer}>
        <DataGrid<ExampleItem>
          frozenColumnIndex={0}
          width={containerWidth}
          height={containerHeight}
          columns={columns}
          data={counselingList}
          spinning={listSpinning}
          onClick={onClickItem}
          page={{
            currentPage: listPaging?.pageNumber ?? 1,
            pageSize: listPaging?.pageSize ?? 0,
            totalPages: listPaging?.pgCount ?? 0,
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

export default ExampleListWidthDrawer;
