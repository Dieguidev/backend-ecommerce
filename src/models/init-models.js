const DataTypes = require("sequelize").DataTypes;
const _cart = require("./cart");
const _order = require("./order");
const _productInOrder = require("./productInOrder");
const _products = require("./products");
const _productsInCart = require("./productsInCart");
const _users = require("./users");

function initModels(sequelize) {
  const users = _users(sequelize, DataTypes);
  const cart = _cart(sequelize, DataTypes);
  const order = _order(sequelize, DataTypes);
  const products = _products(sequelize, DataTypes);
  const productInOrder = _productInOrder(sequelize, DataTypes);
  const productsInCart = _productsInCart(sequelize, DataTypes);

  productsInCart.belongsTo(cart, { as: "cart", foreignKey: "cart_id"});
  cart.hasMany(productsInCart, { as: "productsInCarts", foreignKey: "cart_id"});
  productInOrder.belongsTo(order, { as: "order", foreignKey: "order_id"});
  order.hasMany(productInOrder, { as: "productInOrders", foreignKey: "order_id"});
  productInOrder.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(productInOrder, { as: "productInOrders", foreignKey: "product_id"});
  productsInCart.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(productsInCart, { as: "productsInCarts", foreignKey: "product_id"});
  cart.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(cart, { as: "carts", foreignKey: "user_id"});
  order.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(order, { as: "orders", foreignKey: "user_id"});
  products.belongsTo(users, { as: "user", foreignKey: "seller_id"});
  users.hasMany(products, { as: "products", foreignKey: "seller_id"});

  return {
    users,
    cart,
    order,
    products,
    productInOrder,
    productsInCart,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
