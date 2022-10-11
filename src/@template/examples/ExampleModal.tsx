import styled from "@emotion/styled";
import { Modal, Button, message } from "antd";
import * as React from "react";
import { ModalLayout } from "styles/pageStyled";
import { useModalStore } from "../../stores/useModalStore";
import { delay } from "../../utils/thread/timing";

export interface ExampleModalParams {
  query?: Record<string, any>;
}

interface Props {
  open;
  onOk: (value: any) => void;
  onCancel: (reason?: any) => void;
  afterClose: () => void;
  params: ExampleModalParams;
}

function ExampleModal({ open, onOk, onCancel, afterClose, params }: Props) {
  const handleTest = React.useCallback(() => {
    message.info("The test has been completed.");
  }, []);

  const handleSave = React.useCallback(async () => {
    await delay(300);
    onOk({
      save: true,
    });
  }, [onOk]);

  const handleDelete = React.useCallback(async () => {
    await delay(300);
    onOk({
      delete: true,
    });
  }, [onOk]);

  return (
    <Modal width={640} {...{ open, onCancel, onOk, afterClose }}>
      <Container>
        <ModalLayout.Header title={`샘플(상세#${params.query?.id})`}>
          <Button size={"small"} onClick={handleTest}>
            TEST
          </Button>
        </ModalLayout.Header>
        <Body>조회내용</Body>
        <Footer>
          <Button type='primary' onClick={handleSave}>
            수정하기
          </Button>
          <Button onClick={handleDelete}>삭제하기</Button>
          <Button onClick={onCancel}>취소</Button>
        </Footer>
      </Container>
    </Modal>
  );
}

const Container = styled(ModalLayout)``;
const Body = styled(ModalLayout.Body)``;
const Footer = styled(ModalLayout.Footer)``;

export async function openExampleModal(params: ExampleModalParams = {}) {
  const openModal = useModalStore.getState().openModal;
  return await openModal((open, resolve, reject, onClose, afterClose) => (
    <ExampleModal open={open} onOk={resolve} onCancel={onClose} afterClose={afterClose} params={params} />
  ));
}

export default ExampleModal;
