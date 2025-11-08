// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

app.set('trust proxy', true);

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get('/api/whoami', (req, res) => {
  const languageHeader = req.headers['accept-language'];
  const firstLanguage = languageHeader ? languageHeader.split(',')[0] : null;

  const softwareString = req.headers['user-agent'];
  let extractedSoftware = null;
  if (softwareString) {
    const startIndex = softwareString.indexOf('(');
    const endIndex = softwareString.indexOf(')');
    if (startIndex > -1 && endIndex > startIndex) {
      extractedSoftware = softwareString.substring(startIndex + 1, endIndex);
    };
  };

  res.json({
    ipaddress: req.ip,
    language: firstLanguage,
    software: extractedSoftware,
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
