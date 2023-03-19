import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`;

export const CastItem = styled.li`
  flex-basis: calc((100% - 100px) / 3);
`;

export const IdCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 500;
  font-size: 16px;
  padding-top: 8px;
`;
