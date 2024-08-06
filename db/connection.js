const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "simulasi-livecode",
  idleTimeoutMillis: 100,
});

// (async () => {
//   console.log(await pool.query("SELECT NOW()"));
// })();

module.exports = pool; // !yang di exports adalah instance dari pool bukan class Pool
