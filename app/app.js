const path = require('path');
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');

//services
const mediumBlog = require('./backend/api/v1/mediumBlog/mediumBlog');
const sitemap = require('./backend/api/v1/sitemap/sitemap');
const recaptchaService = require('./backend/api/v1/recaptcha/recaptchaService');

const port = process.env.PORT || 3001;
const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/api/v1/recaptcha/contact', recaptchaService.contact);
app.post('/api/v1/recaptcha/subscribe', recaptchaService.subscribe);

app.get('/api/v1/sitemap', sitemap);

app.get('/api/get/medium', mediumBlog);

app.use(express.static(path.join(__dirname, 'frontend')));
app.use('/*', (req, res) => {
  res.sendFile('frontend/index.html', { root: __dirname });
});

app.listen(port, () => console.log(`Listening on port ${port}`));