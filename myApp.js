const helmet = require('helmet')
const express = require('express');
const app = express();

// Removes the X-Powered-By header if it was set.
app.use(helmet.hidePoweredBy());

app.use(helmet.frameguard(
  {action: 'deny'}
));

app.use(helmet.xssFilter());

app.use(helmet.noSniff());








































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
