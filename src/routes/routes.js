const express = require('express');
const router = express.Router();

const productRoute = require('./product.routes')
const newRoute = require('./new.routes')
const languageRoute = require('./language.routes')

productRoute(router)
newRoute(router)
languageRoute(router)

module.exports = router