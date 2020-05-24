const CosmosClient = require("@azure/cosmos").CosmosClient;
const data = require("../shared/product-data");

module.exports = async function (context, req) {
  try {
    let endpoint = process.env["endpoint"];
    let key = process.env["key"];
    const client = new CosmosClient({ endpoint, key });

    const database = client.database("mydb");
    const container = database.container("mycol");

    const querySpec = {
      query: "SELECT * from c",
    };

    const { resources: items } = await container.items
      .query(querySpec)
      .fetchAll();

    //const products = context.bindings.inputDocumentIn;
    //const products = data.getProducts();
    context.res.status(200).json(items);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
