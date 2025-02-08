import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginUser } from 'redux/slices/auth';
import { Form, FormInput, Message, MessageContainer, UnderFormText } from 'components/common/Form';
import { ROUTES_LINKS } from 'routes';

const LoginComponent = () => {
  const initialInputs = { username: '', password: '' };
  const [credentials, setCredentials] = useState(initialInputs);
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setCredentials({ ...credentials, [target.name]: target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(loginUser(credentials));
  };

  return (
    <>
      { auth.status === 'success' && <Navigate to="/"/> }
      <Form onSubmit={ handleSubmit }>
        <h1>Вход</h1>

        <MessageContainer
          background={ auth.error ? 'darkred' : 'green' }
          display={ !auth.error ? 'none' : 'block' }
        >
          <Message>{ auth.error ? (auth.error.message ? auth.error.message : auth.error) : '' }</Message>
        </MessageContainer>

        <FormInput
          placeholder="Логин"
          required
          type="text"
          name="username"
          onChange={ handleChange }
          value={ credentials.username }
        />
        <FormInput
          placeholder="Пароль"
          required
          type="password"
          name="password"
          onChange={ handleChange }
          value={ credentials.password }
        />

        <button className="btn__primary btn">Войти</button>

        <UnderFormText to={ ROUTES_LINKS.REG }>
          У вас еще нет аккаунта? Зарегистрируйтесь здесь!
        </UnderFormText>
      </Form>
    </>
  );
};

export default LoginComponent;
