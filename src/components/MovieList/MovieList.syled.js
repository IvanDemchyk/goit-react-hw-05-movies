import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
  font-weight: 500;
`;

export const Item = styled(Link)`
  text-decoration: none;
  color: #2a363b;

  &:hover,
  &:focus {
    color: #2196f3;
  }
`;
