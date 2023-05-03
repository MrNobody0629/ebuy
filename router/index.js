const productRouter = require("../components/products/product.routes");
module.exports = (app) => {
  app.use("/product", productRouter);
  return app;
};
