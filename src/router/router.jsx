import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '../layout';
import {
  ChartTemplate,
  WhookTemplate,
  ChargeTemplate,
  NewsTemplate,
  StoreTemplate,
  EventTemplate,
  AwardsTemplate,
  WhosfanTemplate,
} from '../templates';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <div>error</div>,
    children: [
      { path: '/', element: <Navigate to='/chart' /> },
      { path: '/chart', element: <ChartTemplate /> },
      { path: '/whook', element: <WhookTemplate /> },
      { path: '/charge', element: <ChargeTemplate /> },
      { path: '/news', element: <NewsTemplate /> },
      { path: '/store', element: <StoreTemplate /> },
      { path: '/event', element: <EventTemplate /> },
      { path: '/awards', element: <AwardsTemplate /> },
      { path: '/whosfan', element: <WhosfanTemplate /> },
    ],
  },
]);
