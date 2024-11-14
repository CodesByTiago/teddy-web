import { styled } from 'styled-components';
import { GridProps } from './Grid.types';

const Container = styled.div<{ $fluid?: boolean }>`
  width: 100%;
  max-width: ${({ $fluid }) => ($fluid ? '100%' : '1140px')};
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Col = styled.div<GridProps>`
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
  box-sizing: border-box;

  ${({ $col }) =>
    $col &&
    `
    flex: 0 0 ${($col / 12) * 100}%;
    max-width: ${($col / 12) * 100}%;
  `}

  @media (min-width: 576px) {
    ${({ $xs }) =>
      $xs &&
      `
      flex: 0 0 ${($xs / 12) * 100}%;
      max-width: ${($xs / 12) * 100}%;
    `}
  }

  @media (min-width: 576px) {
    ${({ $sm }) =>
      $sm &&
      `
      flex: 0 0 ${($sm / 12) * 100}%;
      max-width: ${($sm / 12) * 100}%;
    `}
  }

  @media (min-width: 768px) {
    ${({ $md }) =>
      $md &&
      `
      flex: 0 0 ${($md / 12) * 100}%;
      max-width: ${($md / 12) * 100}%;
    `}
  }

  @media (min-width: 992px) {
    ${({ $lg }) =>
      $lg &&
      `
      flex: 0 0 ${($lg / 12) * 100}%;
      max-width: ${($lg / 12) * 100}%;
    `}
  }
`;

export { Container, Row, Col };
