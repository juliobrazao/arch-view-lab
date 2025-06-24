import { NavbarItem } from '@/models/navbar-item.model';
import LaboratoryPage from '@/pages/laboratory/laboratory.page';

export const LaboratoryRoute: NavbarItem = {
  name: 'Laboratory',
  path: '/laboratory',
  element: <LaboratoryPage />,
};
