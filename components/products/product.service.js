const { Product } = require("../../models/Product");

const doCreateProduct = async (payload) => {
  try {
    if (!Array.isArray(payload)) {
      throw "Payload must me Array";
    }
    payload.map((element) => {
      if (!element.productId) throw `Product id Required!`;
      if (!element.quantity) throw `quantity Required!`;
      if (!element.operation) throw `operation Required!`;
      return payload;
    });

    await Promise.all(
      payload.map(async (element) => {
        if (element.operation == "add") {
          await addToProduct(element);
        }
        if (element.operation == "subtract") {
          await subtractFromProduct(element);
        }
        return element;
      })
    );

    return payload;
  } catch (error) {
    throw error;
  }
};

const addToProduct = async (payload) => {
  let data = await Product.findOneAndUpdate(
    { productId: payload.productId },
    { $inc: { quantity: payload.quantity } }
  );
  if (!data) {
    throw `Entry not fouind for Product Id ${payload.productId}`;
  }
  return true;
};

const subtractFromProduct = async (payload) => {
  let data = await Product.findOneAndUpdate(
    { productId: payload.productId },
    { $inc: { quantity: -payload.quantity } }
  );
  if (!data) {
    throw `Entry not fouind for Product Id ${payload.productId}`;
  }
  return true;
};

module.exports = {
  doCreateProduct,
};
