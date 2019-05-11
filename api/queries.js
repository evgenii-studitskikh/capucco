const Pool = require('pg').Pool

const pool = new Pool({
  user: process.env.PSQL_USER,
  host: process.env.PSQL_HOST,
  database: process.env.PSQL_DATABASE,
  password: process.env.PSQL_PASSWORD,
  port: 5432,
  ssl: true
})

const getLocations = (request, response) => {

  pool.query(
    'SELECT * FROM public.locations', 
    (error, results) => {
      if (error) {
        throw error
      }
      
      response.status(200).json(results.rows)
  })
}

module.exports = {
  getLocations,
}