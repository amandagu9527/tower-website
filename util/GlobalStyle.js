import { createGlobalStyle } from "styled-components";

import getConfig from 'next/config'
const {backgroundBaseUrl} = getConfig().publicRuntimeConfig

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "GLT-StarrySky";
  src: url('${backgroundBaseUrl}assets/fonts/GLT-StarrySky.otf');
}

body,html{
    padding: 0;
    margin: 0;
}
`;

export default GlobalStyle;
