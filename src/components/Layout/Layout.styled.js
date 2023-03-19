import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 30px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  margin-bottom: 16px;
  border-bottom: 1px solid #2a363b;
`;

export const Link = styled(NavLink)`
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
