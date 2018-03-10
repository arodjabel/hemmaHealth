const AWS = require('aws-sdk');
const config = require('../../../globalConfig');
AWS.config = new AWS.Config();

AWS.config.region = config.awsRegion;
AWS.config.accessKeyId = config.aws_access_key_id;
AWS.config.secretAccessKey = config.aws_secret_access_key;

const ses = new AWS.SES({ apiVerion: '2010-12-01' });

const sendEmail = (toAddresses, fromAddress, subject, htmlBody) => {
  return new Promise((resolve, reject) => {
    var params = {
      Destination: {
        /* required */
        ToAddresses: toAddresses
      },
      Message: {
        /* required */
        Body: {
          /* required */
          Html: {
            Data: htmlBody, /* required */
            Charset: "UTF-8"
          }
        },
        Subject: {
          /* required */
          Data: subject, /* required */
          Charset: "UTF-8"
        }
      },
      Source: fromAddress, /* required */
      ReturnPath: fromAddress
    };

    ses.sendEmail(params, function (err, data) {
      if (err) {
        // console.log(err);
        reject(err, err.stack);
      } // an error occurred
      else {
        // console.log(data);
        resolve(data);
      }      // successful response
    });
  });
};

module.exports = sendEmail;
