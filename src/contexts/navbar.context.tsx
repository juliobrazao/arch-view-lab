import { createContext, ReactNode } from 'react';
import { NavbarItem } from '@/models/navbar-item.model';
import Home from '@/pages/home.page';
import NotFound from '@/pages/not-found.page';

interface NavbarContextProps {
  title: string;
  menuItems: NavbarItem[];
}

export const NavbarContext = createContext<NavbarContextProps>({
  title: '',
  menuItems: [],
});

interface NavbarContextProviderProps {
  children: ReactNode;
}

export default function NavbarContextProvider({
  children,
}: NavbarContextProviderProps) {
  const title = 'Arch View Lab';
  const menuItems = [
    {
      name: 'Home',
      path: '/home',
      element: <Home />,
    },
    {
      name: 'Not Found',
      path: '*',
      element: <NotFound />,
    },
  ];
  return (
    <NavbarContext.Provider value={{ title, menuItems }}>
      {children}
    </NavbarContext.Provider>
  );
}
