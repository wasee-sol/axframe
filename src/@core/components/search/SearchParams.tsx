import * as React from "react";
import styled from "@emotion/styled";
import { Form, FormInstance, Input, Select } from "antd";
import { AXFIArrowDown, AXFIArrowUp, AXFISearch } from "@axframe/icon";
import { IconText, Spinner } from "@core/components/common";
import { SMixinFlexRow } from "@core/styles/emotion";
import { PageLayout } from "styles/pageStyled";
import { SearchParamOption, SearchParamType, SearchParam } from "./SearchParam";
import moment from "moment";

export interface SearchParamObject {
  title: React.ReactNode;
  name: string;
  type: SearchParamType;
  options?: SearchParamOption[];
}

export interface SearchParamValues extends Record<string, any> {
  filter?: string;
  filterType?: string;
}

interface Props {
  form: FormInstance<any>;
  filterTypeOptions?: SearchParamOption[];
  paramObjects?: SearchParamObject[];
  paramValues?: SearchParamValues;
  onChangeParams?: (params: Record<string, any>) => void;
  onSearch?: () => void;
  children?: React.ReactNode;
  visibleChildren?: boolean;
  onChangeVisibleChildren?: (visible: boolean) => void;
  spinning?: boolean;
}

export function SearchParams({
  form,
  filterTypeOptions,
  paramObjects,
  paramValues,
  onChangeParams,
  onSearch,
  children,
  visibleChildren,
  onChangeVisibleChildren,
  spinning,
}: Props) {
  const [showChildren, setShowChildren] = React.useState(false);

  const handleSearch = React.useCallback(() => {
    onSearch?.();
  }, [onSearch]);

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

  const toggleShowExtraParam = React.useCallback(() => {
    onChangeVisibleChildren?.(!showChildren);
    setShowChildren(!showChildren);
  }, [onChangeVisibleChildren, showChildren]);

  React.useEffect(() => {
    const formValues = {
      filterType: paramValues?.filterType,
      filter: paramValues?.filter,
    };

    paramObjects?.forEach((filter) => {
      if (filter.type === SearchParamType.TIME_RANGE) {
        if (paramValues?.[filter.name]) {
          formValues[filter.name] = [moment(paramValues?.[filter.name]?.[0]), moment(paramValues?.[filter.name]?.[1])];
        }
      } else {
        formValues[filter.name] = paramValues?.[filter.name] ?? "";
      }
    });

    form.setFieldsValue(formValues);

    if (visibleChildren !== undefined) {
      setShowChildren(visibleChildren);
    }
  }, [form, paramObjects, paramValues, visibleChildren]);

  return (
    <Form layout='vertical' form={form} onValuesChange={onValuesChange} scrollToFirstError>
      <Container>
        <DefaultWrap>
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
                <Form.Item name={"filterType"} noStyle initialValue={filterTypeOptions?.[0]?.value}>
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
            <IconText icon={spinning ? <Spinner /> : <AXFISearch fontSize={18} />} onClick={handleSearch} />
            {children && (
              <IconText
                icon={showChildren ? <AXFIArrowUp fontSize={18} /> : <AXFIArrowDown fontSize={18} />}
                onClick={toggleShowExtraParam}
              />
            )}
          </Buttons>
        </DefaultWrap>
        {children && showChildren && <FormBox>{children}</FormBox>}
      </Container>
    </Form>
  );
}

const Container = styled.div`
  flex: 1;
`;

const DefaultWrap = styled.div`
  ${SMixinFlexRow("stretch", "center")};
  gap: 10px;
  margin-bottom: 15px;
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

const FormBox = styled(PageLayout.FormBox)`
  margin-top: 10px;
  margin-bottom: 15px;

  > * {
    max-width: none;
  }
`;
