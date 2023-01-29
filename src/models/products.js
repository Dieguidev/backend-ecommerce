const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return products.init(sequelize, DataTypes);
}

/**
 * @openapi
 * components:
 *   schemas:
 *     newProduct:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: TV
 *         price:
 *           type: int
 *           example: 200
 *         available_qty:
 *           type: int
 *           example: 2
 */

class products extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    available_qty: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    is_available: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'products',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "products_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
