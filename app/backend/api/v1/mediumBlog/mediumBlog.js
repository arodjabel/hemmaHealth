module.exports = (req, res) => {
  function success(mediumJson) {
    res.status(200).send(JSON.parse(mediumJson));
  }

  function error(e) {
    res.status(400).sent({ response: e, error: true });
  }

  getMedium().then(success, error);
};

const https = require('https');

function getMedium() {
  return new Promise(function (resolve, reject) {
    var url = 'https://medium.com/@consultinglife1/latest?format=json';

    https.get(url, (mediumResponse) => {
      var body = '';
      mediumResponse.on('data', (d) => {
        body += d;
      }).on('end', () => {
        resolve(JSON.stringify(body));
      });
    }).on('error', (e) => {
      reject(e);
    });
  });
};

// https://medium.com/@consultinglife1/b-y-o-device-to-the-remote-revolution-321a74d85aaa?format=json