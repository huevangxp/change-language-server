const express = require('express');
const router = express.Router();

const productRoute = require('./product.routes')
const newRoute = require('./new.routes')

productRoute(router)
newRoute(router)

module.exports = router