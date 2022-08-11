import * as React from "react";
import { errorDialog } from "components/dialogs/errorDialog";
import { useIsMounted } from "hooks/useIsMounted";

export function useDialog() {
  const isMounted = useIsMounted();

  const callErrorDialog = React.useCallback(
    async (options: unknown) => {
      await errorDialog(options as any, isMounted);
    },
    [isMounted]
  );

  return {
    errorDialog: callErrorDialog,
  };
}
