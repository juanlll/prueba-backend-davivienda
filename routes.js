const express = require('express');
const router = express.Router();
const GetProductsByClientController = require('./src/BoundedContext/Products/Infrastructure/Controllers/GetProductsByClientController');

router.get('/products/:id', async(req, res, next) => await GetProductsByClientController.__invoke(req, res));

module.exports = router;