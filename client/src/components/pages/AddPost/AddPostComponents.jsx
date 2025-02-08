import styled from 'styled-components';
import { FormInput, FormTextarea } from 'components/common/Form';
import { MainButton } from 'components/common/MainButton';

export const AddPostContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
`;

export const AddPostForm = styled.form`
  margin: 0;
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 4em 0;

  & > * {
    margin-left: 5%;
  }
`;

export const AddPostInput = styled(FormInput)`
  width: 90%;
  margin-bottom: 3rem;
`;

export const AddPostLabel = styled.label`
  font-size: 2rem;
  margin-left: 7%;
`;

export const AddPostTextArea = styled(FormTextarea)`
  width: 90%;
  height: 10rem;
  margin-bottom: 3rem;
  font-size: 1.2rem;
`;

export const PublishContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-left: 0;
`;

export const Publish = styled(MainButton)`
  width: 250px;
`;

export const Message = styled.p`
  color: ${ ({ color }) => color };
  font-size: 1.5rem;
  padding: 20px;
  display: inline;
`;
