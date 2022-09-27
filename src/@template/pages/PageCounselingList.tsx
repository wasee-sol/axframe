import { Button } from "antd";
import * as React from "react";
import styled from "@emotion/styled";
import { RFIListSearch, RFIWriteForm } from "react-frame-icon";
import { PageLayout } from "styles/pageStyled";
import { IconText } from "components/common";
import SearchTool from "@template/searchTool/SearchTool";
import { FilterType } from "@template/searchTool/SearchFilter";
import { useCounselingListController } from "@controller/pages/CounselingListController";
import { mergeProps } from "utils/object";
import DataGrid from "../../components/DataGrid";
import { useContainerSize } from "../../hooks/useContainerSize";

interface Props {}

function PageCounselingList(props: Props) {
  const { t } = mergeProps(props, useCounselingListController());

  const bodyContainer = React.useRef<HTMLDivElement>(null);

  const { width: containerWidth, height: containerHeight } = useContainerSize(bodyContainer);

  return (
    <Container stretch role={"page-container"}>
      <Header>
        <IconText icon={<RFIListSearch />}>{t.pages.counseling.list.title}</IconText>

        <ButtonGroup>
          <Button size='small'>{t.button.excel}</Button>
        </ButtonGroup>
      </Header>
      <SearchTool
        filters={[
          {
            title: "행정구역",
            key: "select1",
            icon: <RFIWriteForm />,
            type: FilterType.SELECT,
            options: [
              { value: "중구", label: "중구" },
              { value: "동구", label: "동구" },
              { value: "서구", label: "서구" },
              { value: "남구", label: "남구" },
              { value: "북구", label: "북구" },
            ],
          },
          {
            title: "상담방법",
            key: "select2",
            type: FilterType.SELECT,
            options: [
              { value: "유선", label: "유선" },
              { value: "내방", label: "내방" },
            ],
          },
          {
            title: "상담일자",
            key: "timeRange",
            type: FilterType.TIME_RANGE,
          },
        ]}
        values={{
          select1: "ABC",
          timeRange: "14d",
        }}
        onChangeValues={() => {}}
      />
      <Body ref={bodyContainer}>
        <DataGrid
          width={containerWidth}
          height={containerHeight}
          columns={[{ key: "test", label: "test", width: 100 }]}
          data={[]}
        />
      </Body>
    </Container>
  );
}

const Container = styled(PageLayout)``;
const Header = styled(PageLayout.Header)``;
const Body = styled(PageLayout.Body)``;
const ButtonGroup = styled(PageLayout.ButtonGroup)``;

export default PageCounselingList;
