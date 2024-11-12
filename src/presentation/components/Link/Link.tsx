import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #333;
  padding: 8px 16px;
  border-radius: 5px;
  background-color: none;

  &.active {
    color: ${({ theme }) => theme.font.colors.secondary};
    text-decoration: underline;
  }
`;
