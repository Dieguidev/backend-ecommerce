const DataTypes = require("sequelize").DataTypes;
const _cart = require("./cart");
const _order = require("./order");
const _product_in_order = require("./product_in_order");
const _products = require("./products");
const _products_in_cart = require("./products_in_cart");
const _users = require("./users");

function initModels(sequelize) {
  const users = _users(sequelize, DataTypes);
  const cart = _cart(sequelize, DataTypes);
  const order = _order(sequelize, DataTypes);
  const products = _products(sequelize, DataTypes);
  const product_in_order = _product_in_order(sequelize, DataTypes);
  const products_in_cart = _products_in_cart(sequelize, DataTypes);

  products_in_cart.belongsTo(cart, { as: "cart", foreignKey: "cart_id"});
  cart.hasMany(products_in_cart, { as: "products_in_carts", foreignKey: "cart_id"});
  product_in_order.belongsTo(order, { as: "order", foreignKey: "order_id"});
  order.hasMany(product_in_order, { as: "product_in_orders", foreignKey: "order_id"});
  product_in_order.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(product_in_order, { as: "product_in_orders", foreignKey: "product_id"});
  products_in_cart.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(products_in_cart, { as: "products_in_carts", foreignKey: "product_id"});
  cart.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(cart, { as: "carts", foreignKey: "user_id"});
  order.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(order, { as: "orders", foreignKey: "user_id"});
  products.belongsTo(users, { as: "seller", foreignKey: "seller_id"});
  users.hasMany(products, { as: "products", foreignKey: "seller_id"});

  return {
    users,
    cart,
    order,
    products,
    product_in_order,
    products_in_cart,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
