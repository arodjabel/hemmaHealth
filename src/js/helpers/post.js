import Axios from 'axios';

export const recaptchaPost = (_data) => {
  const url = '/api/v1/recaptcha';
  const headers = {
    'Content-Type': 'application/json'
  };
  const data = { key: _data };

  return {
    promise: new Axios.request({
      url,
      method: 'post',
      headers,
      data: JSON.stringify(data)
    })
  };
}