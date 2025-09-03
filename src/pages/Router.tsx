//components
import { Home } from './Home/home';
import { Post } from './Post/post';
import { DefaultLayout } from '../layouts/DefaultLayout';

//rrd imports
import { createBrowserRouter, Navigate } from 'react-router-dom';

//react imports
import type { JSX } from 'react';
import { DashboardAdmin } from './DashboardAdmin/DashboardAdmin';
import { PostsManager } from './PostsManager/PostManager';

// Rota privada
function PrivateRoute({ element }: { element: JSX.Element }) {
  const isLoggedIn = localStorage.getItem('isLoggedInAdmin') === 'true';
  return isLoggedIn ? element : <Navigate to="/dashboard2490admin" />;
}

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
        path: '/post',
        element: <Post />
      },
      {
        path: '/dashboard2490admin',
        children: [
          {
            index: true,
            element: <DashboardAdmin />
          },
          {
            path: '/dashboard2490admin/posts-manager',
            element: <PrivateRoute element={<PostsManager />} /> // /dashboard2490admin/posts-manager
          }
        ]
      }
    ]
  }
]);
