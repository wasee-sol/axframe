import usePageTabStore from "../src/stores/usePageTabStore";

describe("usePageTabStore", () => {
  it("test", () => {
    const addTab = usePageTabStore.getState().addTab;
    const pages = usePageTabStore.getState().pages;

    const addedTabUuid = addTab({ label: "NEW PAGE", path: "/" });

    expect(pages.size).toBe(2);
    expect(pages.get(addedTabUuid)?.label).toBe("NEW PAGE");
  });
});
