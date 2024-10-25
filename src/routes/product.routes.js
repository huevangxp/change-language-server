const controller = require('../controllers/product.controller');

module.exports = (app) => {
    app.post('/product', controller.createProduct);
    app.get('/product', controller.getAllProducts);
    app.get('/product/:id', controller.getProductById);
    app.put('/product/:id', controller.updateProduct);
    app.delete('/product/:id', controller.deleteProduct);
}