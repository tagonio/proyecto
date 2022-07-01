const { connection, SQL, MONGODB } = require("../config/database");

let startConnection;

switch(connection){

    case SQL:
        startConnection = require("../config/sql/connection");
        break;
    case MONGODB:
        startConnection = require("../config/mongo/connection");
        break;
    default:
        throw new Error(`Debe ser especificada la DB_CONNECTION y tiene que ser ${SQL} o ${MONGODB}`);
}

module.exports = startConnection;
