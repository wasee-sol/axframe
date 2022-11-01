import styled from "@emotion/styled";
import { useExampleList } from "@hooks/examples/useExampleList";
import { Button, Row, Col, Form, Input } from "antd";
import { IconText } from "components/common";
import { DataGrid } from "components/DataGrid";
import { SearchParams } from "components/search";
import { useContainerSize } from "hooks/useContainerSize";
import * as React from "react";
import { RFIListSearch } from "react-frame-icon";
import { ExampleItem } from "repository/example/ExampleRepositoryInterface";
import { PageLayout } from "styles/pageStyled";
import { mergeProps } from "utils/object";

interface Props {}

function ExampleList(props: Props) {
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
  } = mergeProps(props, useExampleList());

  const bodyContainer = React.useRef<HTMLDivElement>(null);
  const { width: containerWidth, height: containerHeight } = useContainerSize(bodyContainer);

  return (
    <Container stretch role={"page-container"}>
      <Header>
        <IconText icon={<RFIListSearch />}>{t.examples.counseling.list.title}</IconText>

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
      >
        <>
          <Row gutter={15}>
            <Col xs={12} sm={6}>
              <Form.Item name={"ext1"} label={"Ext1"} colon={false}>
                <Input />
              </Form.Item>
            </Col>
            <Col xs={12} sm={6}>
              <Form.Item name={"ext2"} label={"Ext2"} colon={false}>
                <Input />
              </Form.Item>
            </Col>
            <Col xs={12} sm={6}>
              <Form.Item name={"ext3"} label={"Ext3"} colon={false}>
                <Input />
              </Form.Item>
            </Col>
            <Col xs={12} sm={6}>
              <Form.Item name={"ext4"} label={"Ext4"} colon={false}>
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={15}>
            <Col xs={12} sm={6}>
              <Form.Item name={"ext2_1"} label={"Ext1_1"} colon={false}>
                <Input />
              </Form.Item>
            </Col>
            <Col xs={12} sm={6}>
              <Form.Item name={"ext2_2"} label={"Ext1_2"} colon={false}>
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </>
      </SearchParams>
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

export default ExampleList;
