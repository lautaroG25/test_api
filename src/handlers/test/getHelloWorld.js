const { ok } = require("../../utils/response");

exports.handler = async (event) => {
  return ok({
    message: "Hello World desde Lambda!",
    timestamp: new Date().toISOString(),
    region: process.env.AWS_REGION || "local",
  });
};