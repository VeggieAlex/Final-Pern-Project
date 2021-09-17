const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "mywings",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;