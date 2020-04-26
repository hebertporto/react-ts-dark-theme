import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    text: string;
    background: string;
    navBar: {
      background: string;
      title: string;
    }
    colors: {
      primary: string;
    }
    containers: {
      maxSize: string;
    }
  }
}