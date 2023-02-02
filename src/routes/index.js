const authRoutes = require('./auth.routes');
const productsRoutes = require('./products.routes')
const productsInCartRoutes = require('./productInCart.routes')

const routerApi = (app) => {
  app.use('/api/v1/auth', authRoutes)
  app.use('/api/v1/products', productsRoutes)
  app.use('/api/v1/productsincart',productsInCartRoutes)
  
}

module.exports = routerApi;