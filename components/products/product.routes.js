const Router = require("express").Router();
const controller = require("./product.controller");
Router.post("/create-product", controller.createProduct);

module.exports = Router;
