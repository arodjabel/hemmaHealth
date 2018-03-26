import Axios from 'axios';

export const getMediumBlog = () => {
  const url = '/api/get/medium';
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  return {
    promise: new Axios.request({
      url,
      method: 'get',
      headers
    })
  };
};
