import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '../layout';
import {
  // ChartTemplate,
  // WhookTemplate,
  // ChargeTemplate,
  // NewsTemplate,
  // StoreTemplate,
  // EventTemplate,
  // AwardsTemplate,
  // WhosfanTemplate,
  MainTemplate,
} from '../templates';

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
      // { path: '/', element: <Navigate to='/chart' /> },
      // { path: '/chart', element: <ChartTemplate /> },
      // { path: '/whook', element: <WhookTemplate /> },
      // { path: '/charge', element: <ChargeTemplate /> },
      // { path: '/news', element: <NewsTemplate /> },
      // { path: '/store', element: <StoreTemplate /> },
      // { path: '/event', element: <EventTemplate /> },
      // { path: '/awards', element: <AwardsTemplate /> },
      // { path: '/whosfan', element: <WhosfanTemplate /> },
    ],
  },
]);
