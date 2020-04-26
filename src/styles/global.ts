import { createGlobalStyle } from 'styled-components';
import reset from './reset';

export default createGlobalStyle`
  ${reset}
  body {
    background-color: ${props => props.theme.background};
    font-size: 16px;
    color: ${props => props.theme.text};
    font-family: sans-serif;
  }
`;