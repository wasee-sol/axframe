import { Drawer, Space, Button } from "antd";
import * as React from "react";
import useExampleDrawer from "@hooks/examples/useExampleDrawer";
import { useDrawerStore } from "stores/useDrawerStore";

export interface ExampleDrawerRequest {
  query?: Record<string, any>;
}

export interface ExampleDrawerResponse {
  save?: boolean;
  delete?: boolean;
}

interface Props {
  open: boolean;
  onOk: (value: any) => ExampleDrawerResponse;
  onCancel: (reason?: any) => void;
  params: ExampleDrawerRequest;
  afterOpenChange: (open: boolean) => void;
}

function ExampleDrawer({ open, onOk, onCancel, params, afterOpenChange }: Props) {
  const { handleTest, handleSave, handleDelete, saveSpinning, deleteSpinning, testSpinning } = useExampleDrawer({
    onOk,
    onCancel,
  });

  return (
    <Drawer
      title={`샘플(상세#${params.query?.id})`}
      width={600}
      open={open}
      bodyStyle={{ paddingBottom: 80 }}
      afterOpenChange={afterOpenChange}
      onClose={onCancel}
      extra={
        <Space>
          <Button onClick={handleTest} loading={testSpinning}>
            TEST
          </Button>
          <Button type='primary' onClick={handleSave} loading={saveSpinning}>
            수정하기
          </Button>
          <Button onClick={handleDelete} loading={deleteSpinning}>
            삭제하기
          </Button>
          <Button onClick={onCancel}>취소</Button>
        </Space>
      }
    >
      TEST {params.query?.id}
    </Drawer>
  );
}

export async function openExampleDrawer(params: ExampleDrawerRequest = {}) {
  const openDrawer = useDrawerStore.getState().openDrawer;
  return await openDrawer<ExampleDrawerResponse>((open, resolve, reject, onClose, afterOpenChange) => (
    <ExampleDrawer open={open} onOk={resolve} onCancel={onClose} afterOpenChange={afterOpenChange} params={params} />
  ));
}

export default ExampleDrawer;
