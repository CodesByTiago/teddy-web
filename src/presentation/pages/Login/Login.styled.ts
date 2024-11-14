import styled from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 0 15px;
`;

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 400px;
  text-align: center;

  form {
    margin-top: ${({ theme }) => theme.spacing.km10};
  }
`;

export const LoginNewUser = styled.div`
  display: flex;
  justify-content: right;
  margin-top: ${({ theme }) => theme.spacing.km5};

  p {
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.size.sz6};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    cursor: pointer;
  }
`;
