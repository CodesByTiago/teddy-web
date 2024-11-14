import styled from 'styled-components';

export const DeleteWrapper = styled.div`
  position: relative;
  max-width: 400px;
  width: 100%;
`;

export const DeleteError = styled.div`
  margin-top: ${({ theme }) => theme.spacing.km14};
`;
