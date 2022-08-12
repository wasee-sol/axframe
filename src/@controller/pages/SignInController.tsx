import * as React from "react";
import SignIn, { SignInFormItem } from "@template/account/SignIn";
import { useDialog } from "hooks/useDialog";
import useUserStore from "stores/useUserStore";
import useUserMenuStore from "stores/useUserMenuStore";
import { UserService } from "services";

function SignInController() {
  const setMe = useUserStore((s) => s.setMe);
  const setMenus = useUserMenuStore((s) => s.setMenus);
  const { errorDialog } = useDialog();

  const handleSignIn = React.useCallback(
    async (values: SignInFormItem) => {
      try {
        const me = await UserService.signIn(values);
        const { menus } = await UserService.getUserMenu(me.uuid);

        setMe(me);
        setMenus(menus);
      } catch (err) {
        await errorDialog(err);
      }
    },
    [errorDialog, setMe, setMenus]
  );

  return <SignIn onSignIn={handleSignIn} />;
}

export default SignInController;
