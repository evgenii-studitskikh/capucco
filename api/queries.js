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
    `SELECT id, title, description, location, image, price, address, options, availability FROM public.courses WHERE location = ${locationId} ORDER BY title ASC`,
    (error, results) => {
      if (error) {
        console.error(error);
      }
      
      results && response.status(200).json(results.rows)
  })
}

const getCourseData = (request, response) => {

  const courseId = request.query.id

  pool.query(
    `SELECT title, description, location, image, price, address, availability, objectives FROM public.courses WHERE id = ${courseId}`,
    (error, results) => {
      if (error) {
        console.error(error);
      }
      
      results && response.status(200).json(results.rows)
  })
}

const getCourseImages = (request, response) => {

  const courseId = request.query.id

  pool.query(
    `SELECT id, url, is_course_cover FROM public.images WHERE course_id = ${courseId}`,
    (error, results) => {
      if (error) {
        console.error(error);
      }
      
      results && response.status(200).json(results.rows)
  })
}

const getPopularLocationsData = (request, response) => {

  pool.query(
    `SELECT id, name, courses_count FROM locations WHERE is_popular = true`,
    (error, results) => {
      if (error) {
        console.error(error);
      }
      
      results && response.status(200).json(results.rows)
  })
}

const getFeaturedCoursesData = (request, response) => {

  pool.query(
    `SELECT id, name, description, location, subject, image FROM course_sets`,
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
  getCoursesData,
  getCourseData,
  getCourseImages,
  getPopularLocationsData,
  getFeaturedCoursesData,
}