import styled, { createGlobalStyle } from "styled-components";

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
    body, input, button {
        font: 16px 'Source Sans Pro', sans-serif;
    }
    #root {
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }
    button {
        cursor: pointer;
    }
`;

export const Section = styled.section`
  height: 100vh;

  > * {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;
