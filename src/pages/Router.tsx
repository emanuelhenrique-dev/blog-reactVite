//components
import { Home } from './Home/home';
import { Post } from './Post/post';
import { DefaultLayout } from '../layouts/DefaultLayout';

//rrd imports
import { createBrowserRouter } from 'react-router-dom';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    // errorElement: <ErrorPage />, // opcional
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'post',
        element: <Post />
      }
    ]
  }
]);
