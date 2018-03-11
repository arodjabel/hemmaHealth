const request = require('request');
const path = require('path');

const sendEmail = require('../../../utils/aws-ses/aws-ses');
const config = require('../../../../globalConfig');

const validate = (data) => {
  return new Promise((resolve, reject) => {
    const payload = {
      body: {
        secret: config.recaptchaSecret,
        response: data.recaptchaResponse
      },
      formData: data
    };

    recaptchaRequest(payload).then(resolve, reject);
  });
};


const recaptchaRequest = function (payload) {
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
    }, (error, response, body) => {
      if (error) {
        rejectFn('error recaptcha challange');
      }

      if (body.success) {
        const toArr = [config.toEmail];
        const fromEmail = config.fromEmail;
        const subject = 'HEMMA HEALTH CONTACT US';
        const emailText = buildMessage(payload.formData);

        sendEmail(toArr, fromEmail, subject, emailText)
          .then((response) => {
            resolveFn({ recaptchaValid: true, message: response });
          }, rejectFn);

        sendEmail([payload.formData.email], fromEmail, 'Hemma Health Contact Us', customerResponse())
          .then(() => {
          }, () => {
          });
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
  if (!responseBody.employer) {
    responseBody.employer = noData;
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
  message += `<span>Company: ${responseBody.employer}</span><br>`;
  message += `<span>Email: ${responseBody.email}</span><br>`;
  message += `<span>Phone: ${responseBody.phone}</span><br>`;
  message += `<span>Details: ${responseBody.details}</span><br>`;
  message += `<span>Time Stamp: ${getTimeStamp()}</span>`;
  message += '</div></body></html>';

  return message;
};

const customerResponse = () => {
  let message = '';
  message += '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
  message += '<html xmlns="http://www.w3.org/1999/xhtml">';
  message += '<head>  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />  <title>hemma health contact us</title>';
  message += '<meta name="viewport" content="width=device-width, initial-scale=1.0"/></head>';
  message += '<body><div>';
  message += `<h2>Thank you</h2>`;
  message += `<span>We got your message and we will be in touch soon</span><br>`;
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