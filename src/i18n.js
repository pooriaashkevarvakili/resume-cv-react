import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// languages
import english from "./locoles/en.json";
import persian from "./locoles/fa.json";

const options = {
    resources: {
        en: {
            translation: english,
        },
        fa: {
            translation: persian,
        },
    },
    fallbackLng: "fa",
    debug: false,
};

i18n.use(initReactI18next).use(LanguageDetector).init(options);

export default i18n;