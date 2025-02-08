import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.form`
  max-width: calc(300px + 6rem);
  margin: 2em 0;
  padding: 3em;
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 50%) 0 10px 20px;
`;

export const FormInput = styled.input`
  background: transparent;
  width: 100%;
  height: 50px;
  padding: 15px;
  color: white;
  border: solid 1px white;
  display: block;
  margin: 15px 0;
  border-radius: 5px;

  &::placeholder {
    color: white;
  }

  @media (max-width: 960px) {
    width: 60vw;
    height: 40px;
  }
`;

export const FormTextarea = styled.textarea`
  background: transparent;
  border-radius: 5px;
  width: 350px;
  height: 70px;
  padding: 15px;
  color: white;
  border: solid 1px white;
  display: block;
  margin: 15px 0;
  resize: none;

  &::placeholder {
    color: white;
  }

  @media (max-width: 960px) {
    width: 65vw;
    height: 60px;
  }
`;

export const UnderFormText = styled(Link)`
  margin-top: 30px;
  opacity: 0.8;
  display: block;

  &:hover {
    opacity: 1;
  }
`;

export const MessageContainer = styled.div`
  background: ${ (props) => props.background };
  padding: 10px 20px;
  margin: 10px 0;
  display: ${ (props) => props.display };
`;

export const Message = styled.p``;

export const InputLabelContainer = styled.div`
  margin-top: 20px;
`;
