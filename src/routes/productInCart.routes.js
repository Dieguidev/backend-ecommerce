const { Router } = require('express');
const { addProductToCart } = require('../controllers/products.controllers');

const router = Router();
router.post('/', addProductToCart)

module.exports = router;