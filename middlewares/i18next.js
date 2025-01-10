const i18next = require('i18next');
const i18nextMiddleware = require('i18next-http-middleware');
const i18nextFsBackend = require('i18next-fs-backend');

i18next
.use(i18nextFsBackend)
.use(i18nextMiddleware.LanguageDetector)
.init({
    backend: { loadPath: './locales/{{lng}}/{{ns}}.json',},
    fallbackLng: 'en',
    preload: ['en', 'kh'],
    ns: ['login', 'register', 'common', 'index'],
    detection: {
        order: ['querystring', 'cookie'],
        caches: ['cookie']
    }
});

module.exports = i18nextMiddleware.handle(i18next);