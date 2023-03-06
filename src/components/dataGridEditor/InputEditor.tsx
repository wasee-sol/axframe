import * as React from "react";
import styled from "@emotion/styled";
import { AXFDGItemRenderProps, getCellValueByRowKey } from "@axframe/datagrid";
import { Input } from "antd";

export function InputEditor<T = Record<string, any>>({
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
    (evt) => {
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
          const value = evt.currentTarget.value;
          setTimeout(() => {
            if (evt.shiftKey) {
              handleSaveEdit(value, "prev", "current");
            } else {
              handleSaveEdit(value, "next", "current");
            }
          });
          break;
        case "Enter":
          handleSaveEdit(evt.currentTarget.value);
          break;
        case "Esc":
        case "Escape":
          handleCancel?.();
          break;
        default:
          return;
      }
    },
    [handleCancel, handleSaveEdit]
  );

  const onBlur = React.useCallback<React.FocusEventHandler<HTMLInputElement>>(
    (evt) => {
      handleSaveEdit(evt.target.value);
    },
    [handleSaveEdit]
  );

  if (editable) {
    return (
      <Container>
        <Input
          bordered={false}
          autoFocus
          size={"small"}
          defaultValue={currentValue}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
        />
      </Container>
    );
  }
  return <>{currentValue}</>;
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  .ant-input {
    padding: 0;
    border-radius: 0;
    height: 100%;
    background: #fff;
    //background: #ccc;
  }
`;
