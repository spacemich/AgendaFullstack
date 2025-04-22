import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }


  body {
    background-image: url("https://i.imgur.com/WeGYM2G.png?1");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
  }
`;

export default Global;
