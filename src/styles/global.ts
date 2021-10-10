import styled, { createGlobalStyle } from "styled-components";

import SFPro from "../fonts/SF-Pro.ttf";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
        background: #F2F2F2;
        -webkit-font-smoothing: antialiased;
    }

    @font-face {
    src: url(${SFPro}) format('truetype');
    font-display: auto;
    font-family: 'SF Pro';
    font-style: normal;
    font-weight: 400;
    }
    body, input, button {
        font: 16px 'SF Pro', sans-serif;

    }
    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;

export const Section = styled.section`
  height: auto;
  min-height: 100vh;
  padding: 40px 20px;
  margin: 0 auto;
  max-width: 960px;

  > * {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;
