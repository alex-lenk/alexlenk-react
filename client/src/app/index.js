import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import SetAuthToken from 'utils/SetAuthToken';
import { getUserByToken } from 'redux/slices/auth';
import Navbar from 'components/common/navbar/Navbar';
import AppRouter from './AppRouter';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/index.scss';

function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    SetAuthToken();
  }, [auth]);

  useEffect(() => {
    dispatch(getUserByToken());
  }, []);

  return (
    <>
      <Navbar status={ auth.status }/>

      <div className="container page__content">
        <HelmetProvider>
          <AppRouter status={ auth.status }/>
        </HelmetProvider>

        <ToastContainer/>
      </div>
    </>
  );
}

export default App;
