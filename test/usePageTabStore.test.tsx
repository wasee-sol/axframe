import { usePageTabStore } from "../src/stores/usePageTabStore";

describe("usePageTabStore", () => {
  afterEach(() => {
    usePageTabStore.getState().clearTab();
  });

  it("addTab", () => {
    const addTab = usePageTabStore.getState().addTab;
    const pages = usePageTabStore.getState().pages;

    const addedTabUuid = addTab({ labels: { en: "NEW PAGE", ko: "" }, path: "/new-page", fixed: false });

    expect(pages.size).toBe(2);
    expect(pages.get(addedTabUuid)?.labels?.en).toBe("NEW PAGE");
  });
  it("updateTab", () => {
    const pages = usePageTabStore.getState().pages;
    const updateTab = usePageTabStore.getState().updateTab;
    const addTab = usePageTabStore.getState().addTab;

    const addedTabUuid = addTab({ labels: { en: "NEW PAGE", ko: "" }, path: "/new-page", metaData: {}, fixed: false });
    const addedTabPage = pages.get(addedTabUuid);
    if (addedTabPage) {
      const pageValue = { ...addedTabPage, metaData: { test: "test" } };
      updateTab(addedTabUuid, pageValue);
      const _pages = usePageTabStore.getState().pages;
      expect(_pages.get(addedTabUuid)?.metaData?.test).toBe("test");
    }
  });
  it("removeTab", () => {
    const addTab = usePageTabStore.getState().addTab;
    const removeTab = usePageTabStore.getState().removeTab;

    const addedTabUuid = addTab({ labels: { en: "NEW PAGE", ko: "" }, path: "/new-page", fixed: false });
    removeTab(addedTabUuid);

    expect(usePageTabStore.getState().pages.size).toBe(1);
  });
});
