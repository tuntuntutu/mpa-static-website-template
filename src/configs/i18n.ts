import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "@/components/locales/en_US";
import translationCN from "@/components/locales/zh_CN";

const resources = {
  en: {
    translation: translationEN,
  },
  cn: {
    translation: translationCN,
  },
};

// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .init({
//     resources,
//     lng: lang || "en",
//     //  https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
//     interpolation: {
//       escapeValue: false, // react already safes from xss
//     },
//   });

export default {
  init: (routeParams: Record<string, string>) => {
    const lang: string = routeParams["lang"] || i18n.language || "en";

    i18n
      .use(initReactI18next) // passes i18n down to react-i18next
      .init({
        resources,
        lng: lang,
        //  https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        interpolation: {
          escapeValue: false, // react already safes from xss
        },
      });
  },
};
