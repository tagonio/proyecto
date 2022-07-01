module.exports = {
    connection: process.env.DB_CONNECTION,
    sql: {
        uri: process.env.DB_URI.includes("postgres") ? process.env.DATABASE_URL : process.env.DB_URI
    },
    mongodb: {
        uri: process.env.DB_URI
    },
    SQL: "sql",
    MONGODB: "mongodb"
}

