const { doCreateProduct } = require("./product.service");

const createProduct = async (req, res, next) => {
  try {
    const payload = req.body;
    const data = await doCreateProduct(payload);
    res.json({ status: "success", data });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", message: error });
  }
};

module.exports = {
  createProduct,
};
