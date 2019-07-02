const mailgun = require('mailgun-js')({
  apiKey: process.env.MAILGUN_API_KEY, 
  domain: process.env.MAILGUN_DOMAIN
});
  
const successfulBooking = (request, response) => {

  const {
    firstName,
    lastName,
    email,
  } = request.body;

  const template = require('../mails/successful-booking')

  const data = {
    from: 'Capucco <noreply@capucco.com>',
    to: email,
    subject: 'Hello',
    html: template.successfulBooking({ firstName, lastName })
  };
  
  mailgun
    .messages()
    .send(data, (error, body) => {
      response.send(body);
    });
}

module.exports = {
  successfulBooking,
}
