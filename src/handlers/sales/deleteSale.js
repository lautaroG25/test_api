const { DeleteCommand } = require("@aws-sdk/lib-dynamodb");
const dynamo = require("../../db/dynamoClient");
const { ok, err } = require("../../utils/response");

exports.handler = async (event) => {
  try {
    const { id } = event.pathParameters;

    if (!id) {
      return err("ID requerido", 400);
    }

    await dynamo.send(new DeleteCommand({
      TableName: "Ventas",
      Key: { id }
    }));

    return ok({ message: "Venta eliminada", id });

  } catch (e) {
    return err(e.message);
  }
};