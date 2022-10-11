import { message } from "antd";
import * as React from "react";
import { useSpinning } from "hooks/useSpinning";
import { delay } from "utils/thread/timing";
import { ExampleModalResponse } from "@template/examples/ExampleModal";

interface ModalProps {
  onOk: (value: any) => ExampleModalResponse;
  onCancel: (reason?: any) => void;
}

export default function useExampleModal({ onOk, onCancel }: ModalProps) {
  const { isBusy, spinning, setSpinning } = useSpinning<{
    save: boolean;
    delete: boolean;
    test: boolean;
  }>();

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

  const handleCancel = React.useCallback(
    (reason?: any) => {
      onCancel(reason);
    },
    [onCancel]
  );

  return {
    handleTest,
    handleSave,
    handleDelete,
    handleCancel,
    saveSpinning: spinning?.save,
    deleteSpinning: spinning?.delete,
    testSpinning: spinning?.test,
  };
}
