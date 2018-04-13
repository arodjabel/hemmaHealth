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

module.exports = {
  customerResponse,
  buildMessage
};
