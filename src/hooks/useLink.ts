import * as React from "react";
import { useNavigate, generatePath } from "react-router-dom";
import { MENUS } from "router/menus";
import { usePageTabStore } from "stores";
import { getFlattedMenus } from "utils/store";
import { RawRoute } from "../router/Routes";
import { stringFormat } from "../utils/string";
import { useI18n } from "./useI18n";

export function useLink() {
  const navigate = useNavigate();
  const addTab = usePageTabStore((s) => s.addTab);
  const updateTab = usePageTabStore((s) => s.updateTab);
  const setActiveTab = usePageTabStore((s) => s.setActiveTab);
  const getActiveTabPage = usePageTabStore((s) => s.getActiveTabPage);
  const { t } = useI18n();

  const linkByTo = React.useCallback(
    (to: string) => {
      const linkToMenu = getFlattedMenus(MENUS).find((fMenu) => fMenu?.key === to);

      const i18nlabel = linkToMenu?.i18nlabel;
      const label = linkToMenu?.label ?? t.pageTab.newTab;
      const { tabUuid, page } = getActiveTabPage();

      if (page.path === "about:blank") {
        updateTab(tabUuid, { ...page, label, i18nlabel, path: to });
        navigate(to);
        return;
      }

      const addedTabUuid = addTab({
        label,
        i18nlabel,
        path: to,
        fixed: false,
      });
      setActiveTab(addedTabUuid);

      navigate(to);
    },
    [addTab, getActiveTabPage, navigate, setActiveTab, t.pageTab.newTab, updateTab]
  );

  const linkByPattern = React.useCallback(
    (route: RawRoute, params: Record<string, any>) => {
      const i18nlabel = { en: stringFormat(route.i18nlabel.en, params), ko: stringFormat(route.i18nlabel.ko, params) };
      const { tabUuid, page } = getActiveTabPage();
      const path = generatePath(route.path, params);

      if (page.path === "about:blank") {
        updateTab(tabUuid, { ...page, i18nlabel, path });
        navigate(path);
        return;
      }

      const addedTabUuid = addTab({
        label: "",
        i18nlabel,
        path,
        fixed: false,
      });
      setActiveTab(addedTabUuid);

      navigate(path);
    },
    [addTab, getActiveTabPage, navigate, setActiveTab, updateTab]
  );

  return {
    linkByTo,
    linkByPattern,
  };
}
