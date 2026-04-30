const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*"
};

exports.ok = (data, statusCode = 200) => ({
  statusCode,
  headers,
  body: JSON.stringify(data),
  isBase64Encoded: false
});

exports.err = (msg, statusCode = 500) => ({
  statusCode,
  headers,
  body: JSON.stringify({ error: msg }),
  isBase64Encoded: false
});
