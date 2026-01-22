import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) // Загружает файлы из /public/locales
  .use(LanguageDetector) // Определяет язык браузера
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru', // Если перевод не найден, покажет русский
    debug: false,
    returnObjects: true, // ОБЯЗАТЕЛЬНО для массивов (.map)
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Путь к твоим файлам
    }
  });

export default i18n;