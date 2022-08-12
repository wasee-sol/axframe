import * as React from "react";
import SignIn, { SignInFormItem } from "@template/account/SignIn";
import { useDialog } from "hooks/useDialog";
import useUserStore from "stores/useUserStore";
import { UserService } from "services";

function SignInController() {
  const setMe = useUserStore((s) => s.setMe);
  const { errorDialog } = useDialog();

  const handleSignIn = React.useCallback(
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

  return <SignIn onSignIn={handleSignIn} />;
}

export default SignInController;
