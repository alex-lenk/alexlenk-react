import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { WithContext as ReactTags } from 'react-tag-input';

import {
  AddPostContainer,
  AddPostForm,
  AddPostInput,
  AddPostLabel,
  AddPostTextArea,
  Message,
} from './AddPostComponents';
import api from 'utils/api';
import handleAxiosError from 'utils/handleAxiosError';
import { useGetAllCategoryDataQuery } from 'api/blogApiSlice';
import Loader from 'components/common/Loader';
import { ROUTES_LINKS } from 'routes';

const AddPost = () => {
  const {
    data,
    error,
    isLoading,
  } = useGetAllCategoryDataQuery();

  const [formData, setFormData] = useState({
    browserTitle: '',
    pageTitle: '',
    content: '',
    description: '',
    introtext: '',
    imageURL: '',
    category: '646d8406a7bbc48ac9b94a56',
  });
  const [tags, setTags] = useState([]);
  const [addPostCall, setAddPostCall] = useState({
    status: 'idle',
    result: null,
    error: null,
  });

  if (isLoading) return <Loader/>;
  if (error) return <div>Error: { error?.message }</div>;

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = [...tags];

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    setTags(newTags);
  };

  const handleChange = (e) => {
    setFormData((newFormData) => {
      return { ...newFormData, [e.target.name]: e.target.value.replace(/^\s+|\s+$/g, '') };
    });
  };

  const handleChangeTextarea = (e) => {
    setFormData((newFormData) => {
      return { ...newFormData, [e.target.name]: e.target.value.replace(/^\s+|\s+$/g, '') };
    });
  };

  const handlePublish = (e) => {
    e.preventDefault();
    setAddPostCall({ ...addPostCall, status: 'loading' });
    const tagsText = tags.map((tag) => tag.text);
    const data = { ...formData, tags: tagsText };
    api.post('/post/add-post', data)
      .then((res) => {
        setAddPostCall({ status: 'succesfull', result: res.data, error: null });
      })
      .catch((error) => {
        const err = handleAxiosError(error);
        if (err === 'return') return;
        setAddPostCall({ status: 'failed', result: null, error: err });
      });
  };

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  return (
    <>
      <AddPostContainer>
        <AddPostForm onSubmit={ handlePublish }>
          <AddPostLabel htmlFor="browserTitle">Заголовок браузера</AddPostLabel>
          <AddPostInput
            type="text"
            name="browserTitle"
            placeholder="Заголовок браузера"
            onChange={ handleChange }
          />

          <AddPostLabel htmlFor="pageTitle">Заголовок страницы</AddPostLabel>
          <AddPostInput
            type="text"
            name="pageTitle"
            placeholder="Заголовок страницы"
            onChange={ handleChange }
          />

          <AddPostLabel htmlFor="imageURL">URL изображения</AddPostLabel>
          <AddPostInput type="text" name="imageURL" placeholder="URL изображения" onChange={ handleChange }/>

          <AddPostLabel htmlFor="content">Контент для поста</AddPostLabel>
          <AddPostTextArea
            name="content"
            placeholder="Контент для поста"
            onChange={ handleChangeTextarea }
          ></AddPostTextArea>

          <AddPostLabel htmlFor="introtext">Короткий текст</AddPostLabel>
          <AddPostTextArea
            name="introtext"
            placeholder="Короткий текст"
            onChange={ handleChangeTextarea }
          ></AddPostTextArea>

          <AddPostLabel htmlFor="introtext">СЕО мета текст description</AddPostLabel>
          <AddPostTextArea
            name="description"
            placeholder="СЕО описание"
            onChange={ handleChangeTextarea }
          ></AddPostTextArea>

          <AddPostLabel>Теги</AddPostLabel>
          <ReactTags
            tags={ tags }
            placeholder="Нажмите Enter, чтобы добавить новый тег"
            handleDelete={ handleDelete }
            handleAddition={ handleAddition }
            handleDrag={ handleDrag }
            autofocus={ false }
            classnames="form__control"
            classNames={ {
              tagInputField: 'form__control',
            } }
          />

          <AddPostLabel htmlFor="category">Категории</AddPostLabel>
          <select name="category" onChange={ handleChange }>
            { data.map(instance => (
              <option key={ instance._id } value={ instance._id }>{ instance.pageTitle }</option>
            )) }
          </select>

          <div>
            <button className="btn__primary btn mt-4">Опубликовать</button>
          </div>

          { addPostCall.status === 'loading' && <Message color="white">Loading...</Message> }
          { addPostCall.status === 'succesfull' && (
            <Message color="lightgreen">
              { addPostCall.result?.message }.
              <br/>
              Вы можете это увидеть <Link to={ ROUTES_LINKS.BLOG }>тут</Link>
            </Message>
          ) }
          { addPostCall.status === 'failed' && <Message color="red">{ addPostCall.error }</Message> }
        </AddPostForm>
      </AddPostContainer>
    </>
  );
};

export default AddPost;
