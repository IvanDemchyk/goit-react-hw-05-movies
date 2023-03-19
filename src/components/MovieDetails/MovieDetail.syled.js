import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const BackLink = styled(Link)`
  text-decoration: none;
  color: #2a363b;
  font-size: 25px;
  font-weight: 500;
  display: inline-block;
  border-radius: 8px;
  border: 2px solid #2a363b;
  width: 80px;
  text-align: center;
  margin-bottom: 10px;

  &:hover,
  &:focus {
    color: #2196f3;
    border: 2px solid #2196f3;
  }
`;

export const Title = styled.h1`
  padding: 8px;
  margin-top: 0;
  border-radius: 8px;
  color: #02121beb;
  font-size: 40px;
  font-weight: 500;
  text-align: center;
  background-color: #2caf51;
`;

export const InfoLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 20px;

  &:hover,
  &:focus {
    color: #2196f3;
  }

  &.active {
    color: #1ff767;
  }
`;
