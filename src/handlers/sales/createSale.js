const { PutCommand } = require("@aws-sdk/lib-dynamodb");
const dynamo = require("../../db/dynamoClient");
const { ok, err } = require("../../utils/response");
const { v4: uuidv4 } = require("uuid");

exports.handler = async (event) => {
  console.log("EVENT:", JSON.stringify(event));
  try {
    // Protección si body viene null o vacío
    if (!event.body) {
      return err("Body vacío o inválido", 400);
    }

    const body = JSON.parse(event.body);
    const item = {
      id: uuidv4(),
      ...body,
      createdAt: new Date().toISOString()
    };

    await dynamo.send(new PutCommand({ TableName: "Ventas", Item: item }));
    return ok(item, 201);

  } catch (e) {
    return err(e.message);
  }
};