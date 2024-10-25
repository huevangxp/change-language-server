const controller = require('../controllers/new.controller');

module.exports = (app) => {
    app
        .get('/news', controller.getAllNews)
        .get('/news/:id', controller.getNewById)
        .post('/news', controller.createNew)
        .put('/news/:id', controller.updateNew)
        .delete('/news/:id', controller.deleteNew);
}