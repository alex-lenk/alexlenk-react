import { Helmet } from 'react-helmet-async';
import RegisterComponent from 'components/ui/RegisterComponent';

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Зарегистрироваться на сайте</title>
      </Helmet>
      <RegisterComponent/>
    </>
  );
};

export default Register;
