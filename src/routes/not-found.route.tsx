import { NavbarItem } from '@/models/navbar-item.model';
import NotFound from '@/pages/not-found.page';

export const NotFoundRoute: NavbarItem = {
  name: 'Not Found',
  path: '*',
  element: <NotFound />,
};
