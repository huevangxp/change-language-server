const controller = require('../controllers/product.controller');

module.exports = (app) => {
    app.post('/products', controller.createProduct)
    app.get('/products', controller.getProducts)
    app.get('/test', controller.getTest)
}