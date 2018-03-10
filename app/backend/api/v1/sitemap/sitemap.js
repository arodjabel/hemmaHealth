const path = require('path');
module.exports = (req, res) => {
  res.sendFile(path.resolve('./app/backend/sitemap/sitemap.txt'));
};