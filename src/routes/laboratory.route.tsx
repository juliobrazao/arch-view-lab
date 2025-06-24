import { NavbarItem } from '@/models/navbar-item.model';
import LaboratoryPage from '@/pages/laboratory/laboratory.page';

export const HomeRoute: NavbarItem = {
  name: 'Laboratory',
  path: '/laboratory',
  element: <LaboratoryPage />,
};
