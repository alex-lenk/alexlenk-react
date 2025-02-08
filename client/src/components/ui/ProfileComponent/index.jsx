import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getUserByToken, logoutUser } from 'redux/slices/auth';
import api from 'utils/api';
import handleAxiosError from 'utils/handleAxiosError';
import { Message, MessageContainer } from 'components/common/Form';
import {
  BasicText,
  ButtonContainer,
  EditContainer,
  Form,
  ImageContainer,
  Img,
  Input,
  Label,
  TextContainer,
} from './ProfileComponents';

const ProfileComponent = ({ edit, setEdit, profileData, setProfileData, previousImage }) => {
  const dispatch = useDispatch();

  const Logout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const [apiError, setApiError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    api.put('/profile/update-profile', {
      data: { fullName: profileData.fullName, imageURL: profileData.imageSrc, email: profileData.email },
    })
      .then((response) => {
        if (response.status === 200) {
          dispatch(getUserByToken());
          setEdit(false);
        }
      })
      .catch((error) => {
        const err = handleAxiosError(error);
        if (err === 'return') return;
        setApiError(err);
      });
  };

  return (
    <>
      <ImageContainer>
        <Img src={ previousImage } alt={ `Profile image of user ${ profileData.username }` } height="300"
             width="300"/>
      </ImageContainer>
      { !edit && (
        <>
          <TextContainer>
            <h1>Мой профиль</h1>

            <BasicText>Полное имя: { profileData.fullName }</BasicText>
            <BasicText>Email: { profileData.email }</BasicText>
            <BasicText>Логин: { profileData.username }</BasicText>
          </TextContainer>

          <ButtonContainer>
            <button className="btn__light btn" onClick={ event => {
              event.preventDefault();
              setEdit(true);
            } }>
              Изменить
            </button>

            <button className="btn__secondary btn" onClick={ Logout }>Выйти из профиля</button>
          </ButtonContainer>
        </>
      ) }
      { edit && (
        <>
          <EditContainer>
            <MessageContainer background="darkred" display={ !apiError ? 'none' : 'block' }>
              <Message>{ apiError }</Message>
            </MessageContainer>

            <Form>
              <Label htmlFor="fullName">ФИО</Label>
              <Input
                required
                type="text"
                name="fullName"
                onChange={ handleChange }
                value={ profileData.fullName }
              />

              <Label htmlFor="email">Email</Label>
              <Input
                required
                type="email"
                name="email"
                onChange={ handleChange }
                value={ profileData.email }
              />

              <Label htmlFor="imageSrc">Ссылка на изображение</Label>
              <Input
                required
                type="text"
                name="imageSrc"
                onChange={ handleChange }
                value={ profileData.imageSrc }
              />
            </Form>
          </EditContainer>

          <ButtonContainer>
            <button className="btn__success btn" onClick={ handleSubmit }>Сохранить</button>
          </ButtonContainer>
        </>
      ) }
    </>
  );
};

ProfileComponent.propTypes = {
  edit: PropTypes.bool,
  setEdit: PropTypes.func,
  profileData: PropTypes.object,
  setProfileData: PropTypes.func,
  previousImage: PropTypes.string,
};

export default ProfileComponent;
