import Axios from 'axios';

export const recaptchaPost = (data) => {
  const url = '/api/v1/recaptcha';
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
