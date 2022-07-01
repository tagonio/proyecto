require("dotenv").config();
const server = require("./boot/server");
const startConnection = require("./boot/database");

const port = process.env.PORT || 4000;

server.listen(port, async ()=>{
    console.log(`Server listening on http://localhost:${port}`);
    await startConnection();
});
