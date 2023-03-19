import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 500;
`;

export const FormInput = styled.input`
  font-size: 18px;
  font-weight: 500;
`;

export const Button = styled.button`
  border-radius: 20px;
  font-weight: 600;

  padding: 10px 20px;
  background-color: #2caf51;
  color: #2a363b;
  border: 1px solid #02121beb;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #2196f3;
  }
  &:focus {
    background-color: #2196f3;
  }
`;
