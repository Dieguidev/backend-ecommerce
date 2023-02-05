const models = require("../models");


class OrderService {
  static async getOrderWithUserId(id) {
    try {
      const result = await models.users.findOne(
        {
          where: { id },
          attributes: { exclude: ['password'] },
          include: {
            model: models.order,
            attributes: { exclude: ['user_id'] },
            as: 'orders',
            include: {
              model: models.product_in_order,
              attributes: { exclude: ['cart_id', "product_id" ] },
              as: 'product_in_orders',
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

module.exports = OrderService;