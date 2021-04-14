import { createGlobalStyle } from "styled-components";

export const theme = {};

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
}
body {
    overflow-x: hidden;
    overscroll-behavior-y: none;
}
button {
    outline: none;
    border: none;
}

`;
