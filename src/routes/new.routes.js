const controller = require('../controllers/new.controller');

module.exports = (app) => {
    app
        .post('/news', controller.create)
        .get('/news', controller.getNews)
        .get('/news/:id', controller.getOneNews)
}