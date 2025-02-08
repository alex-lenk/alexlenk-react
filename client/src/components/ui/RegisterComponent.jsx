import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import api from 'utils/api';
import {
  FormInput,
  Form,
  UnderFormText,
  MessageContainer,
  Message,
} from 'components/common/Form';

import handleAxiosError from 'utils/handleAxiosError';
import { ROUTES_LINKS } from 'routes';

const RegisterComponent = () => {
  const initialInputs = {
    username: '',
    email: '',
    password: '',
    fullName: '',
  };
  const [formData, setFormData] = useState(initialInputs);
  const auth = useSelector((state) => state.auth);
  const [message, setMessage] = useState({ error: false, message: '', loading: true });
  const handleChange = (e) => {
    setFormData((oldData) => {
      return { ...oldData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/auth/register', { ...formData, email: formData.email.toLowerCase() })
      .then((response) => {
        setMessage({ error: false, message: response.data.message, loading: false });
        return setFormData(initialInputs);
      })
      .catch((error) => {
        const err = handleAxiosError(error);
        if (err === 'return') return;
        setMessage({ error: true, message: err, loading: false });
      });
  };

  return (
    <>
      { auth.status === 'success' && <Navigate to="/"/> }
      <Form onSubmit={ handleSubmit }>
        <h1>Регистрация</h1>

        <MessageContainer
          background={ message.error ? 'darkred' : 'green' }
          display={ message.loading ? 'none' : 'block' }
        >
          <Message>{ message.message }</Message>
        </MessageContainer>

        <FormInput
          placeholder="Логин"
          required
          type="text"
          onChange={ handleChange }
          name="username"
          value={ formData.username }
        />

        <FormInput
          placeholder="Email"
          required
          type="email"
          onChange={ handleChange }
          name="email"
          value={ formData.email }
        />

        <FormInput
          placeholder="ФИО"
          required
          type="text"
          onChange={ handleChange }
          name="fullName"
          value={ formData.fullName }
        />

        <FormInput
          placeholder="Пароль"
          required
          type="password"
          onChange={ handleChange }
          name="password"
          value={ formData.password }
        />

        <button className="btn__primary btn">Регистрация</button>

        <UnderFormText to={ ROUTES_LINKS.LOGIN }>У вас уже есть аккаунт? Войдите здесь!</UnderFormText>
      </Form>
    </>
  );
};

export default RegisterComponent;
