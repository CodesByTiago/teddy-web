import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

  body {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    color: ${({ theme }) => theme.font.colors.primary};
  }
`;

export default GlobalStyles;
