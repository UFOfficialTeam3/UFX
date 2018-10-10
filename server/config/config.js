// This config file should contain all the necessary information to actually connect to the database
// we will connect() to the database in the express.js file

/** Helpful resources:
 * Ways to connect to Database: Pool vs Client: https://stackoverflow.com/questions/48751505/how-can-i-choose-between-client-or-pool-for-node-postgres
 * Project structure: https://node-postgres.com/guides/project-structure
 * 
 * IMPORTANT:
 * Pooling: https://node-postgres.com/features/pooling
 */

const { Pool } = require('pg');
const connectionString = 'insert connection string here.'

const pool = new Pool({
  connectionString: connectionString,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
}


