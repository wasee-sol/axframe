import * as React from "react";
import SignIn, { SignInFormItem } from "@template/account/SignIn";
import { useDialog } from "hooks/useDialog";
import useUserStore from "stores/useUserStore";
import useUserMenuStore from "stores/useUserMenuStore";

function SignInController() {
  const signIn = useUserStore((s) => s.signIn);
  const initMenus = useUserMenuStore((s) => s.initMenus);
  const { errorDialog } = useDialog();

  const handleSignIn = React.useCallback(
    async (values: SignInFormItem) => {
      try {
        await signIn(values);
      } catch (err) {
        await errorDialog(err);
      }
    },
    [errorDialog, signIn]
  );

  React.useEffect(() => {
    const unsub = useUserStore.subscribe(async (state) => {
      if (state.me) {
        await initMenus(state.me.uuid);
      }
    });

    return () => {
      unsub();
    };
  }, [initMenus]);

  return <SignIn onSignIn={handleSignIn} />;
}

export default SignInController;
