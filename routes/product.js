const productService = require("../services/product");

module.exports = (api) => {
  api.post("/product", (req, res, next) => {
    try {
      productService.createProduct(req.body);
      res.sendStatus(200);
    } catch (e) {
      next(e);
    }
  });
  api.post("/product-detail", async (req, res, next) => {
    try {
      let product = await productService
        .getProductDetailById(req.body.productId)
        .lean();
      res.send(product);
    } catch (e) {
      next(e);
    }
  });
  api.get("/products", async (req, res, next) => {
    try {
      let products = await productService.getProducts(req.query.page).lean();
      res.json(products);
    } catch (e) {
      next(e);
    }
  });
  api.post("/products/search", async (req, res, next) => {
    try {
      let products = await productService.searchProducts(req.body.query).lean();
      res.json(products);
    } catch (e) {
      next(e);
    }
  });
};
