const models = require("../models");
const db = require("../utils/database")


const users = [
  { username: 'Diego', email: 'diego@gmail.com', password: '1234' },
  { username: 'ely', email: 'ely@gmail.com', password: '1234' },
  { username: 'miky', email: 'miky@gmail.com', password: '1234' },
  { username: 'ana', email: 'ana@gmail.com', password: '1234' }
]

const carts = [
  { total_price: 0, user_id: 1 },
  { total_price: 0, user_id: 2 },
  { total_price: 0, user_id: 3 },
  { total_price: 0, user_id: 4 }
]

const products = [
  { name: 'TV', price: 2000, available_qty: 7, seller_id: 1 },
  { name: 'TV2', price: 1000, available_qty: 7, seller_id: 2 },
  { name: 'TV3', price: 4000, available_qty: 7, seller_id: 3 },
  { name: 'TV4', price: 5000, available_qty: 7, seller_id: 4 },
  { name: 'TV5', price: 6000, available_qty: 7, seller_id: 1 },
  { name: 'TV6', price: 7000, available_qty: 7, seller_id: 2 },
  { name: 'TV7', price: 8000, available_qty: 7, seller_id: 3 },
  { name: 'TV8', price: 9000, available_qty: 7, seller_id: 4 },
  { name: 'TV9', price: 500, available_qty: 7, seller_id: 1 },
  { name: 'TV10', price: 1500, available_qty: 7, seller_id: 2 },
  { name: 'TV11', price: 2500, available_qty: 7, seller_id: 3 },
]

const orders = [
  { total_price: 5000, user_id: 1 }
]

const productsInOrder = [
  { order_id: 1, product_id: 1, quantity: 2, price: 4000 }
]

db.sync({ force: true })
  .then(() => {
    console.log('sembrando');
    users.forEach(user => models.users.create(user));
    setTimeout(() => {
      carts.forEach(car => models.cart.create(car));
    }, 100)
    setTimeout(() => {
      products.forEach(product => models.products.create(product));
    }, 150)
    setTimeout(() => {
      orders.forEach(order => models.order.create(order));
    }, 200)
    setTimeout(() => {
      productsInOrder.forEach(produInOrder => models.product_in_order.create(produInOrder));
    }, 250)
  })