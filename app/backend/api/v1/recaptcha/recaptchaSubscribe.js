const config = require('../../../../globalConfig');

const recaptchaRequest = require('./recaptchaPost');

const recaptchaCallback = (error, response, body) => {
  if (error) {
    rejectFn('error recaptcha challange');
  }

  if (body.success){

  }
};

const recaptchaSubscribe = (data) => {
  return new Promise((resolve, reject) => {
    const payload = {
      body: {
        secret: config.recaptchaSecret,
        response: data.recaptchaResponse
      },
      formData: data
    };

    recaptchaRequest(payload, recaptchaCallback).then(resolve, reject);
  });
};

module.export = recaptchaSubscribe;