import * as React from "react";
import { RFITemplate } from "react-frame-icon";
import { useAppStore } from "stores";
import { useI18n } from "../../hooks";

function HomeController() {
  const setTheme = useAppStore((s) => s.setTheme);
  const setSideMenuOpened = useAppStore((s) => s.setSideMenuOpened);
  const setLanguage = useAppStore((s) => s.setLanguage);

  const { t } = useI18n();

  return (
    <>
      <RFITemplate fontSize={30} />
      Hello World!!! <p>description</p>
      {t.button.ok}
      {t.formItem.user.userId.label}
      {t.button.cancel}
      <button onClick={() => setTheme("light")}>light</button>
      <button onClick={() => setTheme("dark")}>dark</button>
      <button onClick={() => setLanguage("ko")}>한국어</button>
      <button onClick={() => setLanguage("en")}>English</button>
      <button onClick={() => setSideMenuOpened(true)}>왼쪽메뉴 열기</button>
      <button onClick={() => setSideMenuOpened(false)}>왼쪽메뉴 접기</button>
    </>
  );
}

export default HomeController;
