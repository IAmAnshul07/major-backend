const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const productSchema = mongoose.Schema(
  {
    sellerId: {
      type: String,
      required: true,
      trim: true,
    },
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    productDescription: {
      type: String,
      required: true,
      trim: true,
    },
    productImage: {
      type: String,
      required: true,
      trim: true,
    },
    productPrice: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
productSchema.plugin(toJSON);
productSchema.plugin(paginate);

const Product = mongoose.model('Products', productSchema);

module.exports = Product;
