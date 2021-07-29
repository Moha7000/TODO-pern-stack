const Pool = require("pg").Pool;

const pool = new Pool({
  user: "mohanad",
  password: "password",
  host: "db",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
