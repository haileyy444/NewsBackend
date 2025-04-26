"use strict";

const app = require("./app");
const { PORT } = require("./config");

app.listen(PORT, function () {
  console.log(`Started on http://localhost:${PORT}`);
});

app.use(function (err, req, res, next) {
  const status = err.status || 500;
  const message = err.message;
  return res.status(status).json({
    error: { message, status },
  });
});
