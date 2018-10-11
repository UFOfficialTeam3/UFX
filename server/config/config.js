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

const pool = new Pool({
  user: 'OfficialTeam3Master',
  host: 'team3postgredb.cwinamzxahdg.us-east-2.rds.amazonaws.com',
  database: 'OfficialTeam3Master',
  password: 'SECEN3031!',
  port: 5432,
});


// test connection to database
//pool.query('SELECT NOW()', (err, res) => {
//  console.log(err, res)
//  pool.end() // Only call pool.end() once application terminates and no longer needs connection to database. Just ignore this function.
//})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
}


