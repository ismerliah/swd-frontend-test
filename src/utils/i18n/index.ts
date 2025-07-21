import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/en.json";
import th from "./locales/th/th.json";

const resources = {
  en: {
    translation: en
  },
  th: {
    translation: th
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
