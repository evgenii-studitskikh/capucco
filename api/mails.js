var domain = 'sandbox49f6b016c31e47edb6f20ddfc9c43c65.mailgun.org';
var mailgun = require('mailgun-js')({
  apiKey: process.env.MAILGUN_KEY, 
  domain: domain
});
 
var data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'estrueall@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};
 
const successfulBooking = (request, response) => {
  mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });
}

module.exports = {
  successfulBooking,
}
