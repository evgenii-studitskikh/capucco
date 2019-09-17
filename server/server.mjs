import express from 'express'
import bodyParser from 'body-parser'
import forceSsl from 'force-ssl-heroku'
import next from 'next'
import nextI18NextMiddleware from 'next-i18next/middleware'
import nextI18next from './i18n.mjs'

import api from './api/queries'
import mails from './api/mails'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    
    const server = express();
    
    server.use(nextI18NextMiddleware(nextI18next));
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());
    server.use(forceSsl);

    server.get('/api/locationsearch', api.getLocationsBySubstring);
    server.get('/api/locationdata', api.getLocationData);
    server.get('/api/coursesdata', api.getCoursesData);
    server.get('/api/coursedata', api.getCourseData);
    server.get('/api/courseimages', api.getCourseImages);
    server.get('/api/popularlocations', api.getPopularLocationsData);
    server.get('/api/featuredcourses', api.getFeaturedCoursesData);

    server.post('/mails/successfulbooking', mails.successfulBooking);

    server.get('/', (req, res) => {
      const actualPage = '/'
      const queryParams = {}
      
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/searchresults', (req, res) => {
      const actualPage = '/searchresults'
      const queryParams = { 
        location: req.params.location,
        subject: req.params.subject
      }

      app.render(req, res, actualPage, queryParams)
    })

    server.get('/course', (req, res) => {
      const actualPage = '/course'
      const queryParams = { 
        id: req.params.id
      }
      
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    if (dev) {
      server.listen(3000, err => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
      })
    } else {
      server.listen(process.env.PORT || 5000)
    }
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })