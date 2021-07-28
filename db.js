const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "123456",
  host: "db",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
