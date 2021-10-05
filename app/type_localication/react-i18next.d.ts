import translationEN from '../localization/en/translation.json';
import translationPL from '../localization/ru/translation.json';

declare module 'react-i18next' {
  interface Resources {
    translationEN: typeof translationEN;
    translationPL: typeof translationPL;
  }
}

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultTranslation: 'translationEN';
    resources: {
      translationEN: typeof translationEN;
      translationPL: typeof translationPL;
    };
  }
}
