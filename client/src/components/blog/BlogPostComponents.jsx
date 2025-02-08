import styled from 'styled-components';
import { FormTextarea } from 'components/common/Form';

export const FormContent = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const EditContent = styled(FormTextarea)`
  width: 100%;
  font-size: 1.125rem;
  min-height: 30vh;
`;
