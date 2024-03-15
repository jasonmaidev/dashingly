import { createContext, useContext } from 'react';

export const ThemeContext = createContext(undefined);

export function useThemeContext() {
  const theme = useContext(ThemeContext);

  if (theme === undefined) {
    throw new Error('useThemeContext must be used with a ThemeContext');
  }

  return theme;
}