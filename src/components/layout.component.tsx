import { Outlet } from 'react-router';
import Navbar from './navbar.component';
import NavbarContextProvider from '@/contexts/navbar.context';

export default function Layout() {
  return (
    <>
      <NavbarContextProvider>
        <Navbar />
      </NavbarContextProvider>
      <div className="container-fluid mt-3">
        <Outlet />
      </div>
    </>
  );
}
