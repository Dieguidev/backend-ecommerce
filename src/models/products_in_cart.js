const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return products_in_cart.init(sequelize, DataTypes);
}

/**
 * @openapi
 * components:
 *   schemas:
 *     addProductInCart:
 *       type: object
 *       properties:
 *         product_id:
 *           type: int
 *           example: 1
 *         quantity:
 *           type: int
 *           example: 2
 */
class products_in_cart extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cart_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cart',
        key: 'id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    purchase_completed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'products_in_cart',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pproducts_in_cart_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
