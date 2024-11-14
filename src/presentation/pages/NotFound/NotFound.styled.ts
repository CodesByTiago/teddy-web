import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;

export const NotFoundContainer = styled.div`
  position: relative;
  display: block;
  text-align: center;

  p {
    margin: ${({ theme }) => theme.spacing.km8} 0;
  }

  img {
    width: 230px;
    max-width: 100%;
  }
`;

export const LogoPageNotFound = styled.img`
  flex: 1;
  max-width: 100px;
`;
