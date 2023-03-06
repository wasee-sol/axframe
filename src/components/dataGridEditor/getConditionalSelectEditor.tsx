import * as React from "react";
import styled from "@emotion/styled";
import { AXFDGItemRenderProps, getCellValueByRowKey } from "@axframe/datagrid";
import { Select } from "antd";

interface Config {
  isEditable?: (item) => boolean;
  isDisabled?: (item) => boolean;
  disabledColor?: string;
}
export function getConditionalSelectEditor(options: { label: string; value: any }[], config?: Config) {
  return function GetSelectEditor<T = Record<string, any>>({
    editable,
    item,
    column,
    values,
    handleSave,
    handleCancel,
    handleMove,
  }: AXFDGItemRenderProps<T>) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const currentValue = React.useMemo(() => getCellValueByRowKey(column.key, item), [column, item, editable]);

    const handleSaveEdit = React.useCallback(
      (newValue: any, ...rest: any) => {
        if (currentValue === newValue) {
          handleCancel?.();
          const [a, b] = rest;
          handleMove?.(a, b);
          return;
        }
        handleSave?.(newValue, ...rest);
      },
      [currentValue, handleCancel, handleSave, handleMove]
    );

    const onKeyDown = React.useCallback<React.KeyboardEventHandler<HTMLInputElement>>(
      async (evt) => {
        switch (evt.key) {
          case "Down":
          case "ArrowDown":
            handleSaveEdit(evt.currentTarget.value, "current", "next");
            break;
          case "Up":
          case "ArrowUp":
            handleSaveEdit(evt.currentTarget.value, "current", "prev");
            break;
          case "Tab":
            evt.preventDefault();
            if (evt.shiftKey) {
              handleSaveEdit(evt.currentTarget.value, "prev", "current");
            } else {
              handleSaveEdit(evt.currentTarget.value, "next", "current");
            }
            break;
          case "Enter":
            break;
          case "Esc":
          case "Escape":
            await handleCancel?.();
            break;
          default:
            return; // 키 이벤트를 처리하지 않는다면 종료합니다.
        }
      },
      [handleCancel, handleSaveEdit]
    );

    const onBlur = React.useCallback<React.FocusEventHandler<HTMLInputElement>>(
      async (evt) => {
        await handleCancel?.();
      },
      [handleCancel]
    );

    const onSelect = React.useCallback(
      async (value: any, option: any) => {
        await handleSaveEdit(value);
        await handleCancel?.();
      },
      [handleSaveEdit, handleCancel]
    );

    if (config?.isEditable?.(values) || config?.isDisabled) {
      return (
        <Container>
          <Select
            bordered={false}
            size={"small"}
            autoFocus
            options={options}
            defaultValue={currentValue}
            // value={currentValue}
            onSelect={onSelect}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            {...(config?.isDisabled ? { disabled: config.isDisabled?.(values) } : {})}
          />
        </Container>
      );
    }

    return <Container style={{ backgroundColor: config?.disabledColor ?? "inherit" }}></Container>;
  };
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  .ant-select {
    width: 100%;

    .ant-select-selector {
      padding: 0 !important;
    }
  }
`;
