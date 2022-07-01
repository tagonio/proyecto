const mongoose = require("mongoose");
const {mongodb} = require("../database");

const connection = async ()=>{
    await mongoose.connect(mongodb.uri);
    console.log("Connection enabled using mongoose");
}

module.exports = connection;