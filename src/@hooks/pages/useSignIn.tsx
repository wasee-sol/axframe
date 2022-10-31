import { Form } from "antd";
import * as React from "react";
import { SignInFormItem } from "@template/account/SignIn";
import { useDialog, useSpinning } from "hooks";
import { useUserStore } from "stores";
import { UserService } from "services";

export function useSignIn() {
  const setMe = useUserStore((s) => s.setMe);
  const { isBusy, spinning, setSpinning } = useSpinning<{ signIn: boolean }>();
  const { errorDialog } = useDialog();
  const [form] = Form.useForm<SignInFormItem>();

  const onSignIn = React.useCallback(
    async (values: SignInFormItem) => {
      setSpinning({ signIn: true });
      try {
        const me = await UserService.signIn(values);
        await setMe(me);
      } catch (err) {
        await errorDialog(err);
      } finally {
        setSpinning({ signIn: false });
      }
    },
    [errorDialog, setMe, setSpinning]
  );

  return { form, onSignIn, isBusy, spinning: spinning?.signIn, setSpinning };
}
