import { useNavigate } from "react-router-dom";
import usePageTabStore from "../stores/usePageTabStore";
import useUserStore from "../stores/useUserStore";
import { getFlattedUserMenus } from "../utils/store";
import { useI18n } from "./useI18n";

export function useLink() {
  const navigate = useNavigate();
  // const pages = usePageTabStore((s) => s.pages);
  const menus = useUserStore((s) => s.menus);
  const addTab = usePageTabStore((s) => s.addTab);
  const updateTab = usePageTabStore((s) => s.updateTab);
  const setActiveTab = usePageTabStore((s) => s.setActiveTab);
  const getActiveTabPage = usePageTabStore((s) => s.getActiveTabPage);
  const { t } = useI18n();

  const linkTo = (to: string) => {
    const linkToMenu = getFlattedUserMenus(menus).find((fMenu) => fMenu.path === to);
    const label = linkToMenu?.label ?? t.pageTab.newTab;
    const { tabUuid, page } = getActiveTabPage();

    if (page.path === "about:blank") {
      updateTab(tabUuid, { ...page, label, path: to });
      navigate(to);
      return;
    }

    const addedTabUuid = addTab({
      label,
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
