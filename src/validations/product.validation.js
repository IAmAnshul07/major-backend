const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createProduct = {
  body: Joi.object().keys({
    productName: Joi.string().required(),
    productDescription: Joi.string().required(),
    productImage: Joi.string().required(),
    productPrice: Joi.string().required(),
  }),
};

const getAllProducts = {
  query: Joi.object().keys({
    productName: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getProduct = {
  params: Joi.object().keys({
    productId: Joi.string().custom(objectId),
  }),
};

const updateProduct = {
  params: Joi.object().keys({
    productId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      productName: Joi.string(),
      productDescription: Joi.string(),
      productImage: Joi.string(),
      productPrice: Joi.string(),
    })
    .min(1),
};

const deleteProduct = {
  params: Joi.object().keys({
    productId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
