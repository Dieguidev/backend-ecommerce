const authRoutes = require('./auth.routes');
const productsRoutes = require('./products.routes')
const productsInCartRoutes = require('./productInCart.routes')
const ordersRoutes = require('./order.routes')
const cartRoutes = require('./cart.routes');
const authMiddleware = require('../middlewares/auth.middleware');

const routerApi = (app) => {
  app.use('/api/v1/auth', authRoutes)
  app.use('/api/v1/products', authMiddleware, productsRoutes)
  app.use('/api/v1/productsincart', authMiddleware, productsInCartRoutes)
  app.use('/api/v1/orders', authMiddleware, ordersRoutes)
  app.use('/api/v1/cart', authMiddleware, cartRoutes)
}

module.exports = routerApi;