import { useState } from "react";
import * as React from "react";
import { SignInFormItem } from "@template/account/SignIn";
import { useDialog } from "hooks";
import { useUserStore } from "stores";
import { UserService } from "services";

export function useSignIn() {
  const setMe = useUserStore((s) => s.setMe);
  const [signing, setSigning] = useState(false);
  const { errorDialog } = useDialog();

  const onSignIn = React.useCallback(
    async (values: SignInFormItem) => {
      try {
        const me = await UserService.signIn(values);
        await setMe(me);
      } catch (err) {
        await errorDialog(err);
      }
    },
    [errorDialog, setMe]
  );

  return { onSignIn, signing, setSigning };
}
