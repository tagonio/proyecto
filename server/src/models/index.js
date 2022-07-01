const { connection, SQL, MONGODB } = require("../config/database");

let User;

switch(connection){

    case SQL:
        User = require("./sql/user");
        break;
    case MONGODB:
        User = require("./mongo/user");
        break;
    default:
        throw new Error(`Debe ser especificada la DB_CONNECTION y tiene que ser ${SQL} o ${MONGODB}`);
}

module.exports = {
    User
};
