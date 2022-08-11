import EN from "./en";
import KO from "./ko";

const i18n = {
  en: EN,
  ko: KO,
};

export type LanguageType = keyof typeof i18n;
export type Language = typeof EN;
export default i18n;
