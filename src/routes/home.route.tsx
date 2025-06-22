import { NavbarItem } from '@/models/navbar-item.model';
import Home from '@/pages/home.page';

export const HomeRoute: NavbarItem = {
  name: 'Home',
  path: '/home',
  element: <Home />,
};
