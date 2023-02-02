const CartService = require("../services/cart.services");



const getProductsInCart = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await CartService.getProductsInCart(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = { getProductsInCart };