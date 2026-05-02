const { GetCommand, ScanCommand } = require("@aws-sdk/lib-dynamodb");
const dynamo = require("../../db/dynamoClient");
const { ok, err } = require("../../utils/response");

// GET /sales/:id
exports.getOne = async (event) => {
  try {
    const { id } = event.pathParameters;

    const result = await dynamo.send(new GetCommand({
      TableName: "Ventas",
      Key: { id }
    }));

    if (!result.Item) {
      return err("Venta no encontrada", 404);
    }

    return ok(result.Item);

  } catch (e) {
    return err(e.message);
  }
};

// GET /sales
exports.getAll = async (event) => {
  try {
    const result = await dynamo.send(new ScanCommand({
      TableName: "Ventas"
    }));

    return ok(result.Items);

  } catch (e) {
    return err(e.message);
  }
};