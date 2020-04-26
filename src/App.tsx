import React from 'react';
import { ThemeProvider } from 'styled-components';
import useThemeSelector from './utils/useThemeSelector';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  const { theme, handleToggleTheme } = useThemeSelector();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header handleToggle={handleToggleTheme} />
        <Home />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
