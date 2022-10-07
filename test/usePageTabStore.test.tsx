import { usePageTabStore } from "../src/stores/usePageTabStore";

describe("usePageTabStore", () => {
  afterEach(() => {
    usePageTabStore.getState().clearTab();
  });

  it("addTab", () => {
    const addTab = usePageTabStore.getState().addTab;
    const pages = usePageTabStore.getState().pages;

    const addedTabUuid = addTab({ labels: { en: "NEW PAGE", ko: "" }, path: "/", fixed: false });

    expect(pages.size).toBe(2);
    expect(pages.get(addedTabUuid)?.labels).toBe("NEW PAGE");
  });
  it("updateTab", () => {
    const pages = usePageTabStore.getState().pages;
    const updateTab = usePageTabStore.getState().updateTab;
    const addTab = usePageTabStore.getState().addTab;

    const addedTabUuid = addTab({ labels: { en: "NEW PAGE", ko: "" }, path: "/", metaData: {}, fixed: false });
    const addedTabPage = pages.get(addedTabUuid);
    if (addedTabPage) {
      updateTab(addedTabUuid, { ...addedTabPage, metaData: { test: "test" } });
      expect(pages.get(addedTabUuid)?.metaData?.test).toBe("test");
    }
  });
  it("removeTab", () => {
    const addTab = usePageTabStore.getState().addTab;
    const removeTab = usePageTabStore.getState().removeTab;
    const pages = usePageTabStore.getState().pages;

    const addedTabUuid = addTab({ labels: { en: "NEW PAGE", ko: "" }, path: "/", fixed: false });
    removeTab(addedTabUuid);

    expect(pages.size).toBe(1);
  });
});
