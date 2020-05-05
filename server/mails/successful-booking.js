const successfulBooking = (data) => {
  
  const {
    firstName,
    lastName,
  } = data;

  return(`
    <html>
      <h1>
        Dear ${firstName} ${lastName}, thanks for using Capucco!
      </h1>
    </html>
  `)
};

module.exports = {
  successfulBooking,
}