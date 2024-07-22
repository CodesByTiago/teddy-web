import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

  body {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    color: ${({ theme }) => theme.font.colors.primary};
    background-color: #333;
  }
`;

export default GlobalStyle;
