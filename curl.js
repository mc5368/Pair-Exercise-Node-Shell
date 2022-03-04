let request = require('request')

module.exports = function (cmd) {
  let arguments = cmd.split(" ");
  if (arguments[0] !== "curl") {
    return
  };
  request(arguments[1], function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  process.stdout.write(body);
});
}
