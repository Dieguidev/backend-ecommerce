const ProductsServices = require("../services/products.services");


const createProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const seller_id = id
    const { name, price, available_qty } = req.body
    if (!name || !price || !available_qty || !status || !seller_id) {
      return res.status(400).json({ message: 'Missing require fields' })
    };

    const newProduct = { name, price, available_qty, seller_id }
    await ProductsServices.createProduct(newProduct);
    res.status(201).json({ message: 'products created' })
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const getProductsAvailable = async (req, res) => {
  try {
    const result = await ProductsServices.getProductsAvailable();
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = { createProduct, getProductsAvailable }