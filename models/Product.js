const { model, Schema } = require("mongoose");

const productSchema = new Schema({
  productId: { type: String },
  quantity: { type: Number },
});

module.exports.Product = model("Product", productSchema);
