const config = require('../../../../globalConfig');

const recaptchaRequest = require('./recaptchaPost');

const recaptchaCallback = (error, response, body, payload, resolveFn, rejectFn) => {
  if (error) {
    rejectFn('error recaptcha challange');
  }

  if (body.success){

    // post new email address /3.0/lists/9e67587f52/members/

    // {
    //   "email_address": "urist.mcvankab@freddiesjokes.com",
    //   "status": "subscribed",
    //   "merge_fields": {
    //   "FNAME": "Urist",
    //     "LNAME": "McVankab"
    // }
    // }

    console.log(payload);
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

module.exports = recaptchaSubscribe;