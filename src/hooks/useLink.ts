import { useNavigate } from "react-router-dom";
import { MENUS } from "router/menus";
import { usePageTabStore } from "stores";
import { getFlattedMenus } from "utils/store";
import { useI18n } from "./useI18n";

export function useLink() {
  const navigate = useNavigate();
  const addTab = usePageTabStore((s) => s.addTab);
  const updateTab = usePageTabStore((s) => s.updateTab);
  const setActiveTab = usePageTabStore((s) => s.setActiveTab);
  const getActiveTabPage = usePageTabStore((s) => s.getActiveTabPage);
  const { t } = useI18n();

  const linkTo = (to: string) => {
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
  };

  return {
    linkTo,
  };
}
