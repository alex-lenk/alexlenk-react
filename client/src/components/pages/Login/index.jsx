import { Helmet } from 'react-helmet-async';
import LoginComponent from 'components/ui/LoginComponent';

function Login() {
  return (
    <>
      <Helmet>
        <title>Вход в админку сайта</title>
      </Helmet>
      <LoginComponent/>
    </>
  );
}

export default Login;
