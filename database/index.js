const { Pool } = require("pg");

const connectionString = `database connection string goes here`;

async function createConnection() {
  const pool = new Pool({
    connectionString,
    allowExitOnIdle: true,
  });
  return await pool.connect();
}

function endConnection(db) {
  db.release();
}

module.exports = {
  createConnection,
  endConnection,
};
