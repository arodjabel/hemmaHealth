const request = require('request');

module.exports = (payload, callback) => {
  return new Promise(((resolve, reject) => {
    const resolveFn = (response) => {
      resolve(response);
    };

    const rejectFn = (response) => {
      reject();
    };

    request({
      method: 'POST',
      uri: 'https://www.google.com/recaptcha/api/siteverify',
      form: payload.body,
      json: true
    }, (e, r, b) => {
      callback(e, r, b, payload, resolveFn, rejectFn)
    });
  }));
};