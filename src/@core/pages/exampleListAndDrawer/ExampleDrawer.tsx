import { Badge, Button, Descriptions, Drawer, message, Space } from "antd";
import * as React from "react";
import { useDrawerStore } from "@core/stores/useDrawerStore";
import { useI18n } from "../../hooks/useI18n";
import { useSpinning } from "../../hooks/useSpinning";
import { delay } from "../../utils/thread/timing";
import { useDidMountEffect } from "../../hooks/useDidMountEffect";
import { useExampleListAndDrawerStore } from "./useExampleListAndDrawerStore";
import { Loading } from "../../components/common";

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
  const { t } = useI18n();
  const { spinning, setSpinning, isBusy } = useSpinning<{ test: boolean; save: boolean; delete: boolean }>();

  const callExampleDetailApi = useExampleListAndDrawerStore((s) => s.callExampleDetailApi);
  const exampleDetailSpinning = useExampleListAndDrawerStore((s) => s.exampleDetailSpinning);
  const exampleDetail = useExampleListAndDrawerStore((s) => s.exampleDetail);

  const handleTest = React.useCallback(async () => {
    if (isBusy) return;
    setSpinning({ test: true });
    message.info("The test has been completed.");
    await delay(1000);
    setSpinning({ test: false });
  }, [setSpinning, isBusy]);

  const handleSave = React.useCallback(async () => {
    if (isBusy) return;
    setSpinning({ save: true });
    await delay(1000);
    onOk({
      save: true,
    });
    setSpinning({ save: false });
  }, [onOk, setSpinning, isBusy]);

  const handleDelete = React.useCallback(async () => {
    if (isBusy) return;
    setSpinning({ delete: true });
    await delay(300);
    onOk({
      delete: true,
    });
    setSpinning({ delete: false });
  }, [onOk, setSpinning, isBusy]);

  useDidMountEffect(() => {
    callExampleDetailApi(params.query);
  });

  return (
    <Drawer
      title={`샘플(상세#${params.query?.id})`}
      width={800}
      open={open}
      bodyStyle={{ paddingBottom: 80 }}
      afterOpenChange={afterOpenChange}
      onClose={onCancel}
      extra={
        <Space>
          <Button onClick={handleTest} loading={spinning?.test}>
            TEST
          </Button>
          <Button type='primary' onClick={handleSave} loading={spinning?.save}>
            수정하기
          </Button>
          <Button onClick={handleDelete} loading={spinning?.delete}>
            삭제하기
          </Button>
          <Button onClick={onCancel}>취소</Button>
        </Space>
      }
    >
      TEST {params.query?.id}
      <Descriptions bordered size={"small"}>
        <Descriptions.Item label={t.formItem.counseling.name.label}>{exampleDetail?.name}</Descriptions.Item>
        <Descriptions.Item label={t.formItem.counseling.birthDt.label}>{exampleDetail?.birthDt}</Descriptions.Item>
        <Descriptions.Item label={t.formItem.counseling.sex.label}>{exampleDetail?.sex}</Descriptions.Item>
        <Descriptions.Item label={t.formItem.counseling.phone1.label}>{exampleDetail?.phone1}</Descriptions.Item>
        <Descriptions.Item label={t.formItem.counseling.phone2.label} span={2}>
          {exampleDetail?.phone2}
        </Descriptions.Item>
        <Descriptions.Item label='Status' span={3}>
          <Badge status='processing' text='Running' />
        </Descriptions.Item>
        <Descriptions.Item label={t.formItem.counseling.hndcapYn.label}>{exampleDetail?.hndcapYn}</Descriptions.Item>
        <Descriptions.Item label={t.formItem.counseling.hndcapGrade.label}>
          {exampleDetail?.hndcapGrade}
        </Descriptions.Item>
        <Descriptions.Item label={t.formItem.counseling.hndcapTyp.label}>{exampleDetail?.hndcapTyp}</Descriptions.Item>
      </Descriptions>
      <Loading active={exampleDetailSpinning} />
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
