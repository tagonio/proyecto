const express = require("express");
const cors = require("cors");

const api = require("../routes/api");
const web = require("../routes/web");

const app = express();
app.use(cors());
app.use(express.json()); // Habilita el req.body -> POST
app.use(express.urlencoded({ extended: false })); // Habilita el req.query -> GET

app.use("/api/v1", api);
app.use("/", web);

module.exports = app;
