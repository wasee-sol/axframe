import styled from "@emotion/styled";
import { Badge, Button, Descriptions, message, Modal } from "antd";
import * as React from "react";
import { ModalLayout, PageLayout } from "styles/pageStyled";
import { useModalStore } from "@core/stores/useModalStore";
import { delay } from "../../utils/thread/timing";
import { useExampleListAndModalStore } from "./useExampleListAndModalStore";
import { useSpinning } from "../../hooks/useSpinning";
import { useDidMountEffect } from "../../hooks/useDidMountEffect";
import { Loading } from "../../components/common";
import { useI18n } from "../../hooks/useI18n";

export interface ExampleModalRequest {
  query?: Record<string, any>;
}

export interface ExampleModalResponse {
  save?: boolean;
  delete?: boolean;
}

interface Props {
  open: boolean;
  onOk: (value: any) => ExampleModalResponse;
  onCancel: (reason?: any) => void;
  params: ExampleModalRequest;
  afterClose: () => void;
}

function ExampleModal({ open, onOk, onCancel, afterClose, params }: Props) {
  const { t } = useI18n();
  const { spinning, setSpinning, isBusy } = useSpinning<{ test: boolean; save: boolean; delete: boolean }>();

  const callExampleDetailApi = useExampleListAndModalStore((s) => s.callExampleDetailApi);
  const exampleDetailSpinning = useExampleListAndModalStore((s) => s.exampleDetailSpinning);
  const exampleDetail = useExampleListAndModalStore((s) => s.exampleDetail);

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
    <Modal width={800} {...{ open, onCancel, onOk, afterClose }}>
      <Container>
        <ModalLayout.Header title={`샘플(상세#${params.query?.id})`}>
          <Button size={"small"} onClick={handleTest} loading={spinning?.test}>
            TEST
          </Button>
        </ModalLayout.Header>
        <Body>
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
            <Descriptions.Item label={t.formItem.counseling.hndcapYn.label}>
              {exampleDetail?.hndcapYn}
            </Descriptions.Item>
            <Descriptions.Item label={t.formItem.counseling.hndcapGrade.label}>
              {exampleDetail?.hndcapGrade}
            </Descriptions.Item>
            <Descriptions.Item label={t.formItem.counseling.hndcapTyp.label}>
              {exampleDetail?.hndcapTyp}
            </Descriptions.Item>
          </Descriptions>

          <Loading active={exampleDetailSpinning} />
        </Body>
        <Footer>
          <Button type='primary' onClick={handleSave} loading={spinning?.save}>
            수정하기
          </Button>
          <Button onClick={handleDelete} loading={spinning?.delete}>
            삭제하기
          </Button>
          <Button onClick={onCancel}>취소</Button>
        </Footer>
      </Container>
    </Modal>
  );
}

const Container = styled(ModalLayout)``;
const Body = styled(ModalLayout.Body)``;
const ContentBox = styled(PageLayout.ContentBox)``;
const Footer = styled(ModalLayout.Footer)``;

export async function openExampleModal(params: ExampleModalRequest = {}) {
  const openModal = useModalStore.getState().openModal;
  return await openModal<ExampleModalResponse>((open, resolve, reject, onClose, afterClose) => (
    <ExampleModal open={open} onOk={resolve} onCancel={onClose} afterClose={afterClose} params={params} />
  ));
}

export default ExampleModal;
