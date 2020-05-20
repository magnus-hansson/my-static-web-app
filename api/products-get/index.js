const data = require("../shared/product-data");

module.exports = async function (context, req) {
  try {
    //const products = data.getProducts();
    const products = context.bindings.inputDocumentIn;

    context.res.status(200).json(products);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
