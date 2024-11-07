const controller = require('../controllers/language.controller');

module.exports = (app) => {
    app
        .post('/languages', controller.createLanguage)
        .get('/languages', controller.getLanguages)
}