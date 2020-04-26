import { useState, useEffect } from 'react';
import { DefaultTheme } from 'styled-components';
import usePersistedState from '../utils/usePersistedState';
import lightTheme from './../styles/themes/light';
import darkTheme from './../styles/themes/dark';

type Response = {
  theme: DefaultTheme;
  handleToggleTheme: () => void;
};

function useSelectTheme(): Response {
  const [themeKey, setThemeKey] = usePersistedState<string>('theme', 'light');
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme)

  const handleToggleTheme = () => {
    const nexTheme = themeKey === 'light' ? darkTheme : lightTheme;
    setTheme(nexTheme);
    setThemeKey(nexTheme.title);
  }

  useEffect(() => {
    setTheme(themeKey === 'light' ? lightTheme : darkTheme)
  }, []); // eslint-disable-line

  return { theme, handleToggleTheme };
};

export default useSelectTheme;