import * as React from "react";
import styled from "@emotion/styled";
import { Divider, Input, Select, Form } from "antd";
import { RFISearch, RFIRevert } from "react-frame-icon";
import { IconText } from "components/common";
import { SMixinFlexRow } from "styles/emotion";
import { SearchFilter, FilterType } from "./SearchFilter";

export interface FilterOption {
  value: string;
  label: React.ReactNode;
}

export interface Filter {
  title: React.ReactNode;
  key: string;
  icon?: React.ReactNode;
  type: FilterType;
  options?: FilterOption[];
}

export interface SearchToolValues extends Record<string, any> {
  filter?: string;
  filterType?: string;
}

interface Props {
  filterTypeOptions?: { value: string; label: string }[];
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
      console.log("onValuesChange", values);
      onChangeValues?.(values);
    },
    [onChangeValues]
  );

  React.useEffect(() => {
    form.setFieldsValue(values);
  }, [form, values]);

  return (
    <Form
      form={form}
      onValuesChange={onValuesChange}
      initialValues={{
        filterType: "title",
      }}
    >
      <Container>
        {extraParamOptions && extraParamOptions?.length > 0 && (
          <FilterTools>
            {extraParamOptions.map((filter, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <Divider type={"vertical"} />}
                <SearchFilter
                  title={filter.title}
                  type={filter.type}
                  icon={filter.icon}
                  value={values?.[filter.key]}
                  options={filter.options}
                />
              </React.Fragment>
            ))}
          </FilterTools>
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
              <Input placeholder={"search"} />
            </Form.Item>
          </Input.Group>
        </SearchInput>

        <Buttons>
          <IconText icon={<RFISearch fontSize={18} />} onClick={handleSearch} />
          <IconText icon={<RFIRevert fontSize={18} />} onClick={handleReload} />
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

const FilterTools = styled.div`
  ${SMixinFlexRow("flex-start", "center")};
  padding: 0 10px;
  border: 1px solid ${(p) => p.theme.input_border_color};
  height: ${(p) => p.theme.height_base};
  border-radius: ${(p) => p.theme.border_radius_base};
  background: ${(p) => p.theme.component_background};
  flex: none;
`;

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
