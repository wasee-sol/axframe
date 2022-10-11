import styled from "@emotion/styled";
import { Modal, Button } from "antd";
import * as React from "react";
import { ModalLayout } from "styles/pageStyled";
import useExampleModal from "../../@hooks/examples/useExampleModal";
import { useModalStore } from "../../stores/useModalStore";

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
  const { handleTest, handleSave, handleDelete, saveSpinning, deleteSpinning, testSpinning } = useExampleModal({
    onOk,
    onCancel,
  });

  return (
    <Modal width={640} {...{ open, onCancel, onOk, afterClose }}>
      <Container>
        <ModalLayout.Header title={`샘플(상세#${params.query?.id})`}>
          <Button size={"small"} onClick={handleTest} loading={testSpinning}>
            TEST
          </Button>
        </ModalLayout.Header>
        <Body>조회내용</Body>
        <Footer>
          <Button type='primary' onClick={handleSave} loading={saveSpinning}>
            수정하기
          </Button>
          <Button onClick={handleDelete} loading={deleteSpinning}>
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
const Footer = styled(ModalLayout.Footer)``;

export async function openExampleModal(params: ExampleModalRequest = {}) {
  const openModal = useModalStore.getState().openModal;
  return await openModal<ExampleModalResponse>((open, resolve, reject, onClose, afterClose) => (
    <ExampleModal open={open} onOk={resolve} onCancel={onClose} afterClose={afterClose} params={params} />
  ));
}

export default ExampleModal;
