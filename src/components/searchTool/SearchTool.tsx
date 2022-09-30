import * as React from "react";
import styled from "@emotion/styled";
import { Input, Select, Form } from "antd";
import { RFISearch } from "react-frame-icon";
import { IconText } from "components/common";
import { SMixinFlexRow } from "styles/emotion";
import { FilterType, SearchFilter } from "./SearchFilter";

export interface FilterOption {
  value: string;
  label: React.ReactNode;
}

export interface Filter {
  title: React.ReactNode;
  name: string;
  type: FilterType;
  options?: FilterOption[];
}

export interface SearchToolValues extends Record<string, any> {
  filter?: string;
  filterType?: string;
}

export interface FilterTypeOption {
  value: string;
  label: string;
}

interface Props {
  filterTypeOptions?: FilterTypeOption[];
  extraParamOptions?: Filter[];
  values?: SearchToolValues;
  onChangeValues?: (values: Record<string, any>) => void;
  onSearch?: (values: Record<string, any>) => void;
  onReload?: () => void;
}

export function SearchTool({
  filterTypeOptions,
  extraParamOptions,
  values,
  onChangeValues,
  onSearch,
  onReload,
}: Props) {
  const [form] = Form.useForm();

  const handleSearch = React.useCallback(() => {
    const values = form.getFieldsValue();
    onSearch?.(values);
  }, [form, onSearch]);

  const handleReload = React.useCallback(() => {
    onReload?.();
  }, [onReload]);

  const onValuesChange = React.useCallback(
    (changedValues: any, values: Record<string, any>) => {
      onChangeValues?.(values);
    },
    [onChangeValues]
  );

  const onClickExtraButton = React.useCallback(
    (params: Record<string, any>) => {
      form.setFieldsValue(params);
      onChangeValues?.(form.getFieldsValue());
    },
    [form, onChangeValues]
  );

  React.useEffect(() => {
    const formValues = {
      filterType: "",
      filter: "",
    };
    extraParamOptions?.forEach((filter) => {
      formValues[filter.name] = undefined;
    });

    form.setFieldsValue({ ...formValues, ...values });
  }, [extraParamOptions, form, values]);

  return (
    <Form
      form={form}
      onValuesChange={onValuesChange}
      onChange={() => {
        console.log("vvvv");
      }}
      initialValues={{
        filterType: values?.filter ?? filterTypeOptions?.[0]?.value,
      }}
    >
      <Container>
        {extraParamOptions && extraParamOptions?.length > 0 && (
          <Input.Group compact style={{ width: "auto" }}>
            {extraParamOptions.map((filter, idx) => (
              <SearchFilter
                key={idx}
                name={filter.name}
                title={filter.title}
                type={filter.type}
                value={values?.[filter.name]}
                options={filter.options}
                onClickExtraButton={onClickExtraButton}
              />
            ))}
          </Input.Group>
        )}

        <SearchInput>
          <Input.Group compact>
            {filterTypeOptions && (
              <Form.Item name={"filterType"} noStyle>
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

// const FilterTools = styled.div`
//   ${SMixinFlexRow("flex-start", "center")};
//   border: 1px solid ${(p) => p.theme.input_border_color};
//   height: ${(p) => p.theme.height_base};
//   border-radius: ${(p) => p.theme.border_radius_base};
//   background: ${(p) => p.theme.component_background};
//   flex: none;
// `;

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
