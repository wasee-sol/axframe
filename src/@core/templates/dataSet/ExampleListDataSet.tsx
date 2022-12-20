import * as React from "react";
import styled from "@emotion/styled";
import { IParam, SearchParamOption, SearchParams, SearchParamType } from "../../components/search";
import { ExampleItem, ExampleListRequest } from "../../services/example/ExampleRepositoryInterface";
import { DataGrid } from "../../components/DataGrid";
import { useI18n } from "../../hooks/useI18n";
import { Form } from "antd";
import { ExampleListDataGrid } from "../datagrid/ExampleListDataGrid";

interface APIRequest extends ExampleListRequest {}
interface MetaData {}

interface Props {
  requestParams?: Record<string, any>;
  onChangeRequestParams?: (params: Props["requestParams"]) => void;
  metaData?: Record<string, any>;
  onChangeMetadata?: (metaData: Props["metaData"]) => void;
}

function ExampleListDataSet({ requestParams, onChangeRequestParams, metaData, onChangeMetadata }: Props) {
  const { t } = useI18n();
  const [searchForm] = Form.useForm();
  const [params, setParams] = React.useState<IParam[]>([]);
  const [paramsValue, setParamsValue] = React.useState<APIRequest>();
  const [expand, setExpand] = React.useState(false);

  const handleSearch = React.useCallback(() => {}, []);

  React.useEffect(() => {
    setParams([
      {
        title: t.formItem.counseling.area.label,
        name: "select1",
        type: SearchParamType.SELECT,
        options: t.formItem.counseling.area.options,
      },
      {
        title: t.formItem.counseling.cnsltHow.label,
        name: "select2",
        type: SearchParamType.SELECT,
        options: t.formItem.counseling.cnsltHow.options,
      },
      {
        title: t.formItem.counseling.cnsltDt.label,
        name: "timeRange",
        type: SearchParamType.TIME_RANGE,
      },
    ]);
  }, [t]);

  React.useEffect(() => {}, []);
  React.useEffect(() => {}, []);

  return (
    <Container>
      <SearchParams
        form={searchForm}
        params={params}
        paramsValue={paramsValue}
        onChangeParamsValue={(value) => setParamsValue(value)}
        onSearch={handleSearch}
        expand={expand}
        onChangeExpand={(expand) => setExpand(expand)}
        spinning={false}
      />

      <ExampleListDataGrid
        spinning={false}
        list={[]}
        listPaging={{}}
        onChangePage={() => {}}
        sortParams={[]}
        onChangeSortParams={() => {}}
        onClick={() => {}}
      />
    </Container>
  );
}

const Container = styled.div``;

export { ExampleListDataSet };
