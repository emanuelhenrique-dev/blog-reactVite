//theme imports
import { ThemeContextProvider } from './contexts/ThemeContext';

//styles
import { GlobalStyle } from './styles/global';

//components
import { Router } from './pages/Router';

//rrd imports
import { RouterProvider } from 'react-router-dom';

export function App() {
  return (
    <ThemeContextProvider>
      <GlobalStyle />

      <RouterProvider router={Router} />
    </ThemeContextProvider>
  );
}
