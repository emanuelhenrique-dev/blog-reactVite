//components
import { Home } from './Home/home';
import { PostPage } from './PostPage/postPage';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { PostError } from '../components/PostError/PostError';

//rrd imports
import { createBrowserRouter, Navigate } from 'react-router-dom';

//react imports
import type { JSX } from 'react';
import { DashboardAdmin } from './DashboardAdmin/DashboardAdmin';
import { PostsManager, PostsManagerLoader } from './PostsManager/PostsManager';

//PostDashboard
import { PostDashboard } from './PostsManager/PostDashboard/PostDashboard';
import { PostEditor } from './PostsManager/PostEditor/PostEditor';

import { postLoader } from '../loaders/postLoader';

// Rota privada
function PrivateRoute({ element }: { element: JSX.Element }) {
  const isLoggedIn = localStorage.getItem('isLoggedInAdmin') === 'true';
  return isLoggedIn ? element : <Navigate to="/dashboard2490admin" />;
}

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    // errorElement: <PageError />, // opcional
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/post/:id',
        element: <PostPage />
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
            element: <PrivateRoute element={<PostsManager />} />, // /dashboard2490admin/posts-manager
            loader: PostsManagerLoader
          },
          {
            path: '/dashboard2490admin/posts-manager/:id', // detalhe do post no admin
            element: <PrivateRoute element={<PostDashboard />} />,
            loader: postLoader,
            errorElement: <PostError />
          },
          {
            path: '/dashboard2490admin/posts-manager/:id/edit_post', // editar post
            element: <PrivateRoute element={<PostEditor />} />,
            loader: postLoader
          },
          {
            path: '/dashboard2490admin/posts-manager/new_post', // editar post
            element: <PrivateRoute element={<PostEditor />} />
          }
        ]
      }
    ]
  }
]);
