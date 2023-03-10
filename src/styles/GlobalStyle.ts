import * as V from "styles/variables";
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

  body {
    background-color: ${V.BACKGROUND_MAIN};
  }
`;
