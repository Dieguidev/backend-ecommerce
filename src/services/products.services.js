const models = require('../models/index')

class ProductsServices {
  static async createProduct(newProduct) {
    try {
      const result = await models.products.create(newProduct);
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async getProductsAvailable() {
    try {
      const result = await models.products.findAll({
        where: { is_available: true },
        attributes: { exclude: ['seller_id'] },
        include: {
          model: models.users,
          as: 'seller',
          attributes: ['username']
        }
      })
      return result
    } catch (error) {
      throw error;
    }
  }

  static async addProductToCart(newProductInCart) {
    try {
      const result = await models.product_in_order.create(newProductInCart)
      return result
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductsServices;