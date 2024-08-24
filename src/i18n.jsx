import i18n from "i18next";

import transEng from "./components/Header/enHeader.json";

import transUzb from "./components/Header/uzHeader.json";

import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: transEng,
  },
  uz: {
    translation: transUzb,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbacklng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
