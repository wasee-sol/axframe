import * as React from "react";
import styled from "@emotion/styled";
import { Input, Select, Form } from "antd";
import { RFISearch } from "react-frame-icon";
import { IconText } from "components/common";
import { SMixinFlexRow } from "styles/emotion";
import { ParamType, SearchParam, ParamOption } from "./SearchParam";

export interface ParamObject {
  title: React.ReactNode;
  name: string;
  type: ParamType;
  options?: ParamOption[];
}

export interface ParamValues extends Record<string, any> {
  filter?: string;
  filterType?: string;
}

interface Props {
  filterTypeOptions?: ParamOption[];
  paramObjects?: ParamObject[];
  paramValues?: ParamValues;
  onChangeParams?: (params: Record<string, any>) => void;
  onSearch?: (params: Record<string, any>) => void;
}

export function SearchParams({ filterTypeOptions, paramObjects, paramValues, onChangeParams, onSearch }: Props) {
  const [form] = Form.useForm();

  const handleSearch = React.useCallback(() => {
    const values = form.getFieldsValue();
    onSearch?.(values);
  }, [form, onSearch]);

  const onValuesChange = React.useCallback(
    (changedValues: any, values: Record<string, any>) => {
      onChangeParams?.(values);
    },
    [onChangeParams]
  );

  const onClickExtraButton = React.useCallback(
    (params: Record<string, any>) => {
      form.setFieldsValue(params);
      onChangeParams?.(form.getFieldsValue());
    },
    [form, onChangeParams]
  );

  React.useEffect(() => {
    const formValues = {
      filterType: "",
      filter: "",
    };
    paramObjects?.forEach((filter) => {
      formValues[filter.name] = undefined;
    });

    form.setFieldsValue({ ...formValues, ...paramValues });
  }, [paramObjects, form, paramValues]);

  return (
    <Form form={form} onValuesChange={onValuesChange}>
      <Container>
        {paramObjects && paramObjects?.length > 0 && (
          <Input.Group compact style={{ width: "auto" }}>
            {paramObjects.map((filter, idx) => (
              <SearchParam
                key={idx}
                name={filter.name}
                title={filter.title}
                type={filter.type}
                value={paramValues?.[filter.name]}
                options={filter.options}
                onClickExtraButton={onClickExtraButton}
              />
            ))}
          </Input.Group>
        )}

        <SearchInput>
          <Input.Group compact>
            {filterTypeOptions && (
              <Form.Item
                name={"filterType"}
                noStyle
                initialValue={paramValues?.filter ?? filterTypeOptions?.[0]?.value}
              >
                <Select>
                  {filterTypeOptions.map((option, idx) => (
                    <Select.Option key={idx} value={option.value}>
                      {option.label}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            )}
            <Form.Item name={"filter"} noStyle>
              <Input placeholder={"search"} allowClear />
            </Form.Item>
          </Input.Group>
        </SearchInput>

        <Buttons>
          <IconText icon={<RFISearch fontSize={18} />} onClick={handleSearch} />
        </Buttons>
      </Container>
    </Form>
  );
}

const Container = styled.div`
  ${SMixinFlexRow("stretch", "center")};
  gap: 10px;
  margin-bottom: 15px;
`;

const DefaultWrap = styled.div``;
const AdditionalWrap = styled.div``;

const SearchInput = styled.div`
  flex: 1;

  .ant-input-group.ant-input-group-compact {
    ${SMixinFlexRow("stretch", "center")};
  }
`;

const Buttons = styled.div`
  ${SMixinFlexRow("flex-start", "center")};
  flex: none;
`;
