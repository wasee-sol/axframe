import * as React from "react";

import { CloseCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { useI18n } from "hooks/useI18n";

export interface IErrorDialogOptions {
  icon?: React.ReactNode;
  title?: string | React.ReactNode;
  content: React.ReactNode;
  message?: string;
  className?: string;
  width?: string | number;
}

export enum HiddenError {
  NO_PROVIDER = "NO_PROVIDER",
}

const errorDialog = (options: IErrorDialogOptions, isMounted?: React.MutableRefObject<boolean>): Promise<boolean> =>
  new Promise<boolean>((resolve) => {
    if (isMounted && !isMounted.current) {
      return resolve(true);
    }

    const { t } = useI18n();

    Modal.error({
      icon: options.icon === null ? null : options.icon || <CloseCircleOutlined />,
      autoFocusButton: "ok",
      // zIndex: Enums.ModalZIndex.ALERT_DIALOG,
      className: options.className,
      okText: t.button.ok,
      cancelText: t.button.cancel,
      transitionName: "slidedown",
      title: options.title === null ? null : options.title || "Error",
      content: options.content || options.message || "Unknown error occurred",
      width: options.width,
      onOk() {
        resolve(true);
      },
      onCancel() {
        resolve(false);
      },
    });
  });

export { errorDialog };
