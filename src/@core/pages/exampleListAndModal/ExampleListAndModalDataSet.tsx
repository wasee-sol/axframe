import * as React from "react";
import styled from "@emotion/styled";
import { SearchParams, SearchParamType } from "@core/components/search";
import { useI18n } from "@core/hooks/useI18n";
import { Form, message } from "antd";
import { ExampleListAndModalDataGrid } from "./ExampleListAndModalDataGrid";
import { useExampleListAndModalStore } from "./useExampleListAndModalStore";
import { SMixinFlexColumn } from "@core/styles/emotion";
import { AXFDGClickParams } from "@axframe/datagrid";
import { ExampleItem } from "@core/services/example/ExampleRepositoryInterface";
import { openExampleModal } from "./ExampleModal";

interface Props {}

function ExampleListAndModalDataSet(props: Props) {
  const { t } = useI18n();
  // const { linkByRoute } = useLink();
  const exampleListRequestValue = useExampleListAndModalStore((s) => s.exampleListRequestValue);
  const setExampleListRequestValue = useExampleListAndModalStore((s) => s.setExampleListRequestValue);
  const callApi = useExampleListAndModalStore((s) => s.callExampleListApi);
  const spinning = useExampleListAndModalStore((s) => s.exampleListSpinning);

  const [searchForm] = Form.useForm();

  const handleSearch = React.useCallback(async () => {
    await callApi();
  }, [callApi]);

  const onClickItem = React.useCallback(async (params: AXFDGClickParams<ExampleItem>) => {
    try {
      const data = await openExampleModal({
        query: params.item,
      });

      message.info(JSON.stringify(data ?? {}));
    } catch (err) {
      console.log(err);
    }
  }, []);

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

      <ExampleListAndModalDataGrid onClick={onClickItem} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  flex: 1;
  ${SMixinFlexColumn("stretch", "stretch")};
`;

export { ExampleListAndModalDataSet };
