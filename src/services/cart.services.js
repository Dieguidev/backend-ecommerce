const models = require('../models/index');

class CartService {
  static async addProductToCart(newCart){
    try {
      const result = await models.products_in_cart.create(newCart)
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports= CartService;