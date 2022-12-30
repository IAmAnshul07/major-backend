const httpStatus = require('http-status');
const { Product } = require('../models');
const ApiError = require('../utils/ApiError');


const createProduct = async (data) => {
  return Product.create(data);
};

const queryAllProducts = async (filter, options) => {
  const products = await Product.paginate(filter, options);
  return products;
};

const getProductById = async (id) => {
  return Product.findById(id);
};

const updateProductById = async (id, updateBody) => {
  const product = await getProductById(id);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  Object.assign(product, updateBody);
  await product.save();
  return product;
};

const deleteProductById = async (id) => {
  const product = await getProductById(id);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  await product.remove();
  return product;
};

module.exports = {
  createProduct,
  queryAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
