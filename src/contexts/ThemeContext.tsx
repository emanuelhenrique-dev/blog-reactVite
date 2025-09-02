import { createContext, useContext, useState, type ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles/themes/default';
import { darkTheme } from '../styles/themes/darkTheme';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  function toggleTheme() {
    setIsDark((prev) => !prev);
    console.log(isDark);
  }

  const theme = isDark ? darkTheme : defaultTheme;

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDark }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      'useThemeContext deve ser usado dentro de ThemeContextProvider'
    );
  }
  return context;
}
