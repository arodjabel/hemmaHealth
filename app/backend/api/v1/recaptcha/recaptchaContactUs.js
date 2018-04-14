const path = require('path');

const sendEmail = require('../../../utils/aws-ses/aws-ses');
const contactUsFn = require('../../../utils/contact-us/contact-us-fn');
const config = require('../../../../globalConfig');
const recaptchaRequest = require('./recaptchaPost');

const reacptchaContactUsCallback = (error, response, body, payload, resolveFn, rejectFn) => {
  if (error) {
    rejectFn('error recaptcha challange');
    console.log(error);
  }

  if (body.success) {
    const toArr = [config.toEmail];
    const fromEmail = config.fromEmail;
    const subject = 'HEMMA HEALTH CONTACT US';
    const emailText = contactUsFn.buildMessage(payload.formData);

    sendEmail(toArr, fromEmail, subject, emailText)
      .then((response) => {
        resolveFn({ recaptchaValid: true, message: response });
      }, rejectFn);

    sendEmail([payload.formData.email], fromEmail, 'Hemma Health Contact Us', contactUsFn.customerResponse())
      .then(() => {
      }, () => {
      });
  } else {
    resolveFn({
      recaptchaValid: false,
      message: 'Google denied the validation of recaptcha'
    });
  }
};

const validateContactUsForm = (data) => {
  return new Promise((resolve, reject) => {
    const payload = {
      body: {
        secret: config.recaptchaSecret,
        response: data.recaptchaResponse
      },
      formData: data
    };

    recaptchaRequest(payload, reacptchaContactUsCallback).then(resolve, reject);
  });
};

module.exports = validateContactUsForm;