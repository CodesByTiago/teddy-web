import styled from 'styled-components';

export const HomeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
`;

export const HomeTypographyWrapper = styled.div`
  position: relative;
  display: block;
`;

export const HomeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  img {
    max-width: 230px;
    width: 100%;
  }

  p {
    text-align: center;
  }
`;
