import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    margin: 0%;
  padding: 0%;
  font-family: 'Barlow', 'Noto Sans KR', sans-serif;
  }
  a {
    color: #000;
    text-decoration: none;
  }
  input {
    border: none;
    background: transparent;
  }
  input:focus {
    outline: none;
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
