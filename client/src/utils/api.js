import axios from 'axios';
import { logoutUser } from 'redux/slices/auth';
import store from 'store/store';
import { API_BASE_URL } from 'api/apiConfig';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response && err.response.data && err.response.data.message === 'The session ended. Please reconnect') {
      store.dispatch(logoutUser());
    }
    return Promise.reject(err);
  },
);

export default api;
