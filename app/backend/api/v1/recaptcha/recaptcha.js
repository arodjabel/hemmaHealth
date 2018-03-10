const validateRecaptcha = require('./validateRecaptcha');

module.exports = (req, res) => {
  console.log('body', req.body);
  const successFn = () => {
    res.status(200).send({ response: 'recaptcha was valid, email was sent', value: true });
  };

  const failFn = () => {
    console.log('failure');
    res.status(200).send({ response: 'recaptcha was invalid.', value: false });
  };

  validateRecaptcha(req.body).then(successFn, failFn);
};
