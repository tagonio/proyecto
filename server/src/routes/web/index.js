const express = require("express");
const path = require("path");

const router = express.Router();

const clientFolder = path.resolve(__dirname + "/../../../../client/build");

router.use("/", express.static(clientFolder));

router.use("/*", (req, res) => { // Esta ruta hace match con /login /register
    return res.sendFile(clientFolder + "/index.html");
})

module.exports = router;
