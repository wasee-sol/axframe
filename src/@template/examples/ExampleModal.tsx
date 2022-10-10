import styled from "@emotion/styled";
import { Modal } from "antd";
import * as React from "react";
import { PageLayout } from "styles/pageStyled";
import { useModalStore } from "../../stores/useModalStore";

interface Props {
  open;
  onClickOkButton: () => void;
  onClickCancelButton: (reason?: any) => void;
  afterClose: () => void;
}

function ExampleModal({ open, onClickOkButton, onClickCancelButton, afterClose }: Props) {
  return (
    <Modal
      open={open}
      closable
      destroyOnClose
      onCancel={() => onClickCancelButton()}
      onOk={onClickOkButton}
      afterClose={afterClose}
    >
      <Body>조회내용</Body>
    </Modal>
  );
}

const Container = styled(PageLayout)``;
const Header = styled(PageLayout.Header)``;
const Body = styled(PageLayout.Body)``;
const FormBoxHeader = styled(PageLayout.FormBoxHeader)``;
const FormBox = styled(PageLayout.FormBox)``;
const FormGroupTitle = styled(PageLayout.FormGroupTitle)``;
const ButtonGroup = styled(PageLayout.ButtonGroup)``;

interface ExampleModalParams {
  path?: string;
}

export async function openExampleModal(params: ExampleModalParams = {}) {
  const openModal = useModalStore.getState().openModal;
  return await openModal((open, resolve, reject, afterClose) => (
    <ExampleModal
      open={open}
      onClickOkButton={resolve}
      onClickCancelButton={(reason) => reject(reason || new Error("Errors.Modal.CANCEL"))}
      afterClose={afterClose}
    />
  ));
}

export default ExampleModal;
