const { Router } = require('express');
const { getProductsInCart } = require('../controllers/cart.controllers');
const { addProductToCart } = require('../controllers/products.controllers');


const router = Router();

/**
 * @openapi
 * /api/v1/productsincart:
 *   post:
 *     security:
 *       - bearerAuth: [ ]
 *     summary: add product to cart
 *     tags:
 *       - Products
 *     requestBody:
 *       description: Required fields to add product to cart
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/addProductInCart'
 *     responses:
 *       200:
 *         description: Add product to cart
 *         content: 
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 
 *                     cart_id: 2
 *                     product_id: 3
 *                     quantity: 1
 *                     price: 2000
 * 
 *       400:
 *         description: Validation error
 *         content: 
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: validation error
 */

router.post('/', addProductToCart)
router.get('/:id', getProductsInCart)

module.exports = router;