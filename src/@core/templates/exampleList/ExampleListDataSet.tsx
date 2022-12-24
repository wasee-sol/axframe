import * as React from "react";
import styled from "@emotion/styled";
import { SearchParams, SearchParamType } from "@core/components/search";
import { useI18n } from "@core/hooks/useI18n";
import { Form } from "antd";
import { ExampleListDataGrid } from "./ExampleListDataGrid";
import { useExampleListStore } from "./useExampleListStore";
import { SMixinFlexColumn } from "@core/styles/emotion";

interface Props {}

function ExampleListDataSet(props: Props) {
  const { t } = useI18n();
  const exampleListRequestValue = useExampleListStore((s) => s.exampleListRequestValue);
  const setExampleListRequestValue = useExampleListStore((s) => s.setExampleListRequestValue);
  const callApi = useExampleListStore((s) => s.callExampleListApi);
  const spinning = useExampleListStore((s) => s.exampleListSpinning);

  const [searchForm] = Form.useForm();

  const handleSearch = React.useCallback(async () => {
    await callApi();
  }, [callApi]);

  const params = React.useMemo(
    () => [
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
    ],
    [t]
  );

  return (
    <Container>
      <SearchParams
        form={searchForm}
        params={params}
        paramsValue={exampleListRequestValue}
        onChangeParamsValue={(value) => setExampleListRequestValue(value)}
        onSearch={handleSearch}
        spinning={spinning}
      />

      <ExampleListDataGrid
        onClick={(params) => {
          console.log(params.item, params.itemIndex, params.columnIndex);
        }}
      />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  flex: 1;
  ${SMixinFlexColumn("stretch", "stretch")};
`;

export { ExampleListDataSet };
