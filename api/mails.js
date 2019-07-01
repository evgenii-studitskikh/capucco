const mailgun = require('mailgun-js')({
  apiKey: process.env.MAILGUN_API_KEY, 
  domain: process.env.MAILGUN_DOMAIN
});
  
const successfulBooking = (request, response) => {

  const {
    firstName,
    email,
  } = request.body;

  const data = {
    from: 'Capucco <noreply@capucco.com>',
    to: email,
    subject: 'Hello',
    text: `Dear ${firstName}, thanks for using Capucco!`
  };
  
  mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });
}

module.exports = {
  successfulBooking,
}
