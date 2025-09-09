//context imports
import { ThemeContextProvider } from './contexts/ThemeContext';
import { PostsContextProvider } from './contexts/PostsContext';
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
      <PostsContextProvider>
        <RouterProvider router={Router} />
      </PostsContextProvider>
    </ThemeContextProvider>
  );
}
