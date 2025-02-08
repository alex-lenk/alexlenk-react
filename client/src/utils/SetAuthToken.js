import api from './api';
import { getFromStorage } from './storage';

const SetAuthToken = () => {
  const token = getFromStorage('token');
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${ token }`;
    return;
  }
  delete api.defaults.headers.common['Authorization'];
};

export default SetAuthToken;
