import styled from 'styled-components';

export const RegisterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const RegisterContainer = styled.div`
  width: 100%;
  max-width: 521px;
  text-align: center;

  form {
    margin-top: ${({ theme }) => theme.spacing.km10};
  }
`;
