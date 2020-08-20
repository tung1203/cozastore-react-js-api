const ProductModel = require("../models/product");

module.exports = {
  createProduct: (product) => ProductModel.create(product),
  getProductDetailById: (productId) => ProductModel.findById(productId),
  getProducts: (page) =>
    ProductModel.find({})
      .limit(4)
      .skip(4 * page),
  searchProducts: (productName) =>
    ProductModel.find({
      productName: { $regex: new RegExp(productName, "i") },
    }),
};
