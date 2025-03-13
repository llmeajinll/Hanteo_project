import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '../layout';
import { MainTemplate } from '../templates';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <div>error</div>,
    children: [
      { index: true, element: <Navigate to='/chart' /> },
      { path: 'chart', element: <MainTemplate /> },
      { path: 'whook', element: <MainTemplate /> },
      { path: 'charge', element: <MainTemplate /> },
      { path: 'news', element: <MainTemplate /> },
      { path: 'store', element: <MainTemplate /> },
      { path: 'event', element: <MainTemplate /> },
      { path: 'awards', element: <MainTemplate /> },
      { path: 'whosfan', element: <MainTemplate /> },
    ],
  },
]);
