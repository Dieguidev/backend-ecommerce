const models = require('../models/index');

class CartService {
  static async addProductToCart(newCart) {
    try {
      const result = await models.products_in_cart.create(newCart)
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async createdCart(newCart) {
    try {
      const result = await models.cart.create(newCart)
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getProductsInCart(id) {
    try {
      const result = await models.users.findOne(
        {
          where: { id },
          attributes: { exclude: ['password'] },
          include: {
            model: models.cart,
            attributes: { exclude: ['user_id'] },
            as: 'carts',
            include: {
              model: models.products_in_cart,
              attributes: { exclude: ['cart_id', "product_id" ] },
              as: 'products_in_carts',
              include: {
                model: models.products,
                as: 'product'
              }
            }
          }
        },
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CartService;