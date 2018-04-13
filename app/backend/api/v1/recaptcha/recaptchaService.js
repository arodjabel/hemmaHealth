const recaptchaContactUs = require('./recaptchaContactUs');
const recaptchaSubscribe = require('./recaptchaSubscribe');

module.exports = {
  contact: (req, res) => {
    const successFn = () => {
      res.status(200).send({ response: 'recaptcha was valid, email was sent', value: true });
    };

    const failFn = () => {
      res.status(200).send({ response: 'recaptcha was invalid.', value: false });
    };

    recaptchaContactUs(req.body).then(successFn, failFn);
  },
  subscribe: (req, res) => {
    const successFn = () => {
      res.status(200).send({ response: 'recaptcha was valid, email was sent', value: true });
    };

    const failFn = () => {
      res.status(200).send({ response: 'recaptcha was invalid.', value: false });
    };

    recaptchaSubscribe(req.body).then(successFn, failFn);
  }
};
