/* eslint-disable prettier/prettier */
import { createGlobalStyle } from 'styled-components';

const leftGradientColors = ['B5AC49', '085078', 'EB3349', '333333', '3E5151', '536976'];
const rightGradientColors = ['3CA55C', '85D8CE', 'F45C43', 'dd1818', 'DECBA4', '292E49'];

const index = Math.floor(Math.random() * Math.floor(rightGradientColors.length));

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background: #3CA55C;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #${leftGradientColors[index]}, #${rightGradientColors[index]});
    background: linear-gradient(to right, #${leftGradientColors[index]}, #${rightGradientColors[index]});
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  h1{
    font-size: 100px;
  }
`;

export default GlobalStyle;
