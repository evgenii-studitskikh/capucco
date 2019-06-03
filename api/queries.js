const Pool = require('pg').Pool

const pool = new Pool({
  user: process.env.PSQL_USER,
  host: process.env.PSQL_HOST,
  database: process.env.PSQL_DATABASE,
  password: process.env.PSQL_PASSWORD,
  port: 5432,
  ssl: true
})

const getLocationsBySubstring = (request, response) => {

  const term = request.query.q.toLowerCase();

  pool.query(
    `SELECT id, name FROM public.locations WHERE LOWER(name) LIKE '%${term}%'`,
    (error, results) => {
      if (error) {
        console.error(error);
      }
      
      results && response.status(200).json(results.rows)
  })
}

const getLocationData = (request, response) => {

  const locationId = request.query.id

  pool.query(
    `SELECT id, name, description FROM public.locations WHERE id = ${locationId}`,
    (error, results) => {
      if (error) {
        console.error(error);
      }
      
      results && response.status(200).json(results.rows)
  })
}

const getCoursesData = (request, response) => {

  const locationId = request.query.location

  pool.query(
    `SELECT id, name, description, location, image, price FROM public.courses WHERE location = ${locationId}`,
    (error, results) => {
      if (error) {
        console.error(error);
      }
      
      results && response.status(200).json(results.rows)
  })
}


module.exports = {
  getLocationsBySubstring,
  getLocationData,
  getCoursesData
}