const path = require('path');
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');

//services
const sitemap = require('./backend/api/v1/sitemap/sitemap');
const recaptcha = require('./backend/api/v1/recaptcha/recaptcha');

const port = process.env.PORT || 3001;
const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/api/v1/recaptcha', recaptcha);

app.get('/api/v1/sitemap', sitemap);

app.get('/api/get/medium', (req, res) => {
  function success(mediumJson) {
    res.status(200).send(JSON.parse(mediumJson));
  }

  function error(e) {
    res.status(400).sent({ response: e, error: true });
  }

  getMedium().then(success, error);
});

app.use(express.static(path.join(__dirname, 'frontend')));
app.use('/*', (req, res) => {
  res.sendFile('frontend/index.html', { root: __dirname });
});


app.listen(port, () => console.log(`Listening on port ${port}`));