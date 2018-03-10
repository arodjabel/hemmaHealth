const request = require('request');
const path = require('path');

const sendEmail = require('../../../utils/aws-ses/aws-ses');
const config = require('../../../../globalConfig');

const validate = (data) => {
  return new Promise((resolve, reject) => {
    const payload = {
      secret: config.recaptchaSecret,
      response: data
    };

    console.log('here', payload);

    recaptchaRequest(payload.key).then(resolve, reject);
  });
};


const recaptchaRequest = function (payload) {
  return new Promise(((resolve, reject) => {
    const resolveFn = (response) => {
      console.log(response);
      resolve(response);
    };

    const rejectFn = (response) => {
      reject();
    };

    if (!responseBody.recaptcha) {
      rejectFn({ recaptchaValid: false, message: 'No recaptcha' });
    }

    request({
      method: 'POST',
      uri: 'https://www.google.com/recaptcha/api/siteverify',
      form: payload,
      json: true
    }, (error, response, body) => {
      if (error) {
        rejectFn('error recaptcha challange');
      }

      if (body.success) {
        const toArr = [config.toEmail];
        const fromEmail = config.fromEmail;
        const subject = 'HEMMA HEALTH CONTACT US';
        const emailText = buildMessage(responseBody);
        const clientSecret = path.join(__dirname, '../', 'client_secret.json');

        sendEmail(toArr, fromEmail, subject, emailText).then((response) => {
          resolveFn({ recaptchaValid: true, message: response });
        }, rejectFn);
      } else {
        resolveFn({
          recaptchaValid: false,
          message: 'Google denied the validation of recaptcha'
        });
      }
    });
  }));
};

const buildMessage = (responseBody) => {
  const noData = 'no value entered';
  if (!responseBody.name) {
    responseBody.name = noData;
  }
  if (!responseBody.company) {
    responseBody.company = noData;
  }
  if (!responseBody.phone) {
    responseBody.phone = noData;
  }
  if (!responseBody.details) {
    responseBody.details = noData;
  }

  let message = '';
  message += '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
  message += '<html xmlns="http://www.w3.org/1999/xhtml">';
  message += '<head>  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />  <title>hemma health contact us</title>';
  message += '<meta name="viewport" content="width=device-width, initial-scale=1.0"/></head>';
  message += '<body><div>';
  message += `<h2>Message From: ${responseBody.name}</h2>`;
  message += `<span>Company: ${responseBody.company}</span><br>`;
  message += `<span>Email: ${responseBody.email}</span><br>`;
  message += `<span>Phone: ${responseBody.phone}</span><br>`;
  message += `<span>Details: ${responseBody.details}</span><br>`;
  message += `<span>Time Stamp: ${getTimeStamp()}</span>`;
  message += '</div></body></html>';

  return message;
};

const getTimeStamp = () => {
  let date;
  date = new Date();
  return `${((date.getHours() < 10) ? '0' : '') +
  date.getHours()}:${
    (date.getMinutes() < 10) ? '0' : ''
    }${date.getMinutes()}:${
    (date.getSeconds() < 10) ? '0' : ''
    }${date.getSeconds()}`;
};


module.exports = validate;