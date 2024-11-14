import { styled } from 'styled-components';

export const SuccessMessage = styled.p`
  display: flex;
  align-items: center;
  color: green;
  font-size: ${({ theme }) => theme.font.size.sz8};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  display: block;
  padding: ${({ theme }) => theme.spacing.km15} 0;
`;
