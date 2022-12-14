import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    font-family: 'Poppins', sans-serif;
  }

  :root {
    --tablet: 768px;
    --desktop: 1440px;
    --large-desktop: 1920px;
  }
`;
