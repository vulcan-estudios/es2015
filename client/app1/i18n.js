const i18n = {

  langs: {
    en: {
      title: 'ES2015 Playground',
      description: 'This is a place to play around with JavaScript ES2015 features!',
    },
    es: {
      title: 'Patio de ES2015',
      description: 'Esto es un lugar para explorar las características de JavaScript ES2015!',
    }
  },

  get (key, lang = 'en') {
    return i18n.langs[lang][key] || '';
  }
};

export default i18n;
