import { TypographyProps } from '@domain/interfaces/TypographyProps';
import { styled } from 'styled-components';

export const Typography = styled.p<TypographyProps>`
  color: ${({ color }) => color || 'black'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  margin-bottom: ${({ theme }) => theme.spacing.km4};

  span {
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }
`;
