import { useState } from "react";
import * as React from "react";
import SignIn, { SignInFormItem } from "@template/account/SignIn";
import { useDialog } from "hooks/useDialog";
import useUserStore from "stores/useUserStore";
import { UserService } from "services";

export function useSignInController() {
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
function SignInController() {
  return <SignIn />;
}

export default SignInController;
