import { createBrowserRouter } from 'react-router';
import Layout from '@/components/layout.component';
import { routeItems } from './routes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: routeItems,
  },
]);
