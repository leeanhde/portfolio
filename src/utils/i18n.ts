import en from '@/locales/en.json';
import vi from '@/locales/vi.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LANGUAGE_EN } from '@/constants/common';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    vi: {
      translation: vi,
    },
  },
  lng: LANGUAGE_EN,
  fallbackLng: LANGUAGE_EN,
  defaultNS: 'translation',
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
