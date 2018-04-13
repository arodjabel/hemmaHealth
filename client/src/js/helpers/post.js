import Axios from 'axios';

export const recaptchaContactPost = (data) => {
  const url = '/api/v1/recaptcha/contact';
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  return {
    promise: new Axios.request({
      url,
      method: 'post',
      headers,
      data: JSON.stringify(data)
    })
  };
};

export const recaptchaSubscribePost = (data) => {
  const url = '/api/v1/recaptcha/subscribe';
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  return {
    promise: new Axios.request({
      url,
      method: 'post',
      headers,
      data: JSON.stringify(data)
    })
  };
};
