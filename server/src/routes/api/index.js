const express = require("express");
const auth = require("./auth");

const router = express.Router();

router.use("/",(req,res)=>{
    return res.send("Estoy en la api");
});

router.use("/auth", auth);


module.exports = router;
